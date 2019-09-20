import { Stats, StatsEventListener } from '@opencensus/core';

export interface HTTPMetric {
  /**
   * Metric name
   */
  name?: string;
  /**
   * Metric description
   */
  desc?: string;
  /**
   * Histogram/Summary buckets
   */
  buckets?: Array<number>;
}

export interface Metrics {
  /**
   * http request durations
   */
  distribution?: HTTPMetric;

  /**
   * http request count
   */
  count?: HTTPMetric;

  /**
   * http request duration sum
   */
  sum?: HTTPMetric;
}

export interface FastifyOpenCensus {
  /**
   * global Stats of opencensus
   */
  client: Stats;

  /**
   * Expose register clear function if register was provided
   */
  clearRegister?(): void;
  /**
   * Additional objects to store your metrics, registries, etc.
   */
  [key: string]: any;
}

export interface PluginOptions {
  /**
   * Enable default nodejs metrics
   * @default true
   */
  enableDefaultMetrics?: boolean;

  /**
   * Enable stats metrics for http route
   * @default true
   */
  enableStats?: boolean;

  /**
   * Groups status code labels by first digit 200 -> 2XX
   * @default false
   */
  groupStatusCodes?: boolean;
  /**
   * Plugin name that will be registered in fastify
   * @default opencensus
   */
  pluginName?: string;
  /**
   * Metrics collection interval in ms
   * @default 5000
   */
  interval?: number;
  /**
   * Routes blacklist that will be excluded from metrics collection
   */
  blacklist?: RegExp | Array<string> | string;
  /**
   * opencensus registry for default metrics and route metrics
   */
  stats?: Stats;

  /**
   * Metrics prefix
   */
  prefix?: string;
  /**
   * Metrics endpoint for Prometheus
   */
  endpoint?: string;
  /**
   * HTTP metrics overrides
   */
  metrics?: Metrics;

  metricsExporter?: Array<StatsEventListener>;
}
