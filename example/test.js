const path = require('path');
const metricsPlugin = require('../dist/index');
const fastifyBuilder = require('fastify');

function init() {
  const fastify = fastifyBuilder({
    // logger: { level: conf.LogLevel }
  });
    /*
    fastify.register(fastifyShutdown).after((err) => {
        fastify.log.error(err);
        // Register custom clean up handler
        fastify.gracefulShutdown((code, cb) => {
            cb();
        });
    }); */

  const {PrometheusStatsExporter} = require('@opencensus/exporter-prometheus');
  const exporter = new PrometheusStatsExporter({
    port: 9464,
    startServer: true,
  });
  fastify.register(metricsPlugin, {endpoint: '/metrics', metricsExporter: [exporter]});

  fastify.ready(() => {
    const routes = fastify.printRoutes();
    // log.debug(logCatalog.FASTIFY_AVAILABLE_ROUTES, routes);
  });

  fastify.get('/info', {
    schema: {hide: true},
  }, async (request, reply) => {
    reply.send('ok');
  });


  fastify.listen(process.env.PORT || 3000, '0.0.0.0');
  console.log('started');
}


process.on('unhandledRejection', (reason) => {
  throw reason;
});
process.on('uncaughtException', (error) => {
  console.log(error);
});

init();
