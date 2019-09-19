import * as http from 'http';
import { FastifyInstance, Plugin } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { globalStats} from '@opencensus/core';
import * as _tracing from '@opencensus/nodejs';
import { PluginOptions, FastifyOpenCensus } from './plugin';
import { collectMetricsForUrl, sinceInMilliseconds } from './util';
import OpenCensusMetrics from './stat';

declare module 'fastify' {
  interface FastifyInstance<
    HttpServer = http.Server,
    HttpRequest = http.IncomingMessage,
    HttpResponse = http.ServerResponse
    > {
    /**
     * Metrics interface
     */
    metrics: FastifyOpenCensus;
  }
  interface RouteSchema {
    /**
     * Hides metric route from swagger/openapi documentation
     */
    hide?: boolean; // for compatibility with fastify-oas
  }
  interface FastifyRequest<HttpRequest, Query, Params, Headers, Body> {
    metrics?: {
      /**
       * Request start time
       */
      startTime: number;

    };
  }
}

/**
 * Fastify OpenCensus plugin
 */
const fastifyOpenCensusPlugin: Plugin<
  http.Server,
  http.IncomingMessage,
  http.ServerResponse,
  PluginOptions
> = function fastifyOpenCensus(
  fastify: FastifyInstance,
  {
    enableDefaultMetrics = true,
    enableStats = true,
    enableTracing = false,   
    zPagesOptions, 
    stats = globalStats,
    tracing,
    metricsExporter,
    tracingExporter,
    groupStatusCodes = false,
    pluginName = 'opencensus',
    interval = 5000,
    blacklist,    
    prefix,
    metrics = {}
  }: PluginOptions = {},
  next: fastifyPlugin.nextCallback
) {    
    const openCensusMetrics: OpenCensusMetrics = new OpenCensusMetrics(stats, tracing || _tracing, {metricsExporter, tracingExporter});   

    if (enableTracing) {
      openCensusMetrics.startTracing();
    }    
   
    if (enableStats) {      
      openCensusMetrics.createMetrics(metrics, prefix || '');

      if (endpoint) {
        fastify.route({
          url: endpoint,
          method: 'GET',
          schema: { hide: true },
          handler: (_, reply) => {
            const data = stats.getMetrics();
            reply.type('text/plain').send(JSON.stringify(data));
          },
        });
      }

      fastify.addHook('onRequest', (request, _, next) => {
        if (request.req.url && collectMetricsForUrl(blacklist, request.req.url)) {
          request.metrics = {
            startTime: process.hrtime()[1]
          };
        }
        next();
      });

      fastify.addHook('onResponse', function (request, reply, next) {
        if (request.metrics) {
          let routeId = reply.context.config.url || request.req.url;
          if (reply.context.config.statsId) {
            routeId = reply.context.config.statsId;
          }
          const method = request.req.method;
          const statusCode = groupStatusCodes
            ? `${Math.floor(reply.res.statusCode / 100)}xx`
            : reply.res.statusCode;

          openCensusMetrics.recordLatencyMeasurement(sinceInMilliseconds(request.metrics.startTime), method || 'UNKNOWN', statusCode, routeId);
        }
        next();
      });
    }

    if (enableDefaultMetrics) {
      const defaultOpts = {
        timeout: interval,
        register : stats,
        prefix
      };
      /*client.collectDefaultMetrics(defaultOpts); */
    }    

    if (zPagesOptions) {
      openCensusMetrics.startZPagesServer(zPagesOptions);
    }

    const plugin: FastifyOpenCensus = { client: stats, tracing: tracing || _tracing };
    plugin.clearRegister = stats.clear;
    fastify.decorate(pluginName, plugin);

    next();
  };

export = fastifyPlugin(fastifyOpenCensusPlugin, {
  fastify: '>=2.0.0',
  name: 'fastify-opencensus',
});
