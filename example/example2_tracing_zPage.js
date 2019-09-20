// How to set multiple metric exporters and a zPage traces exporter

const metricsPlugin = require('../dist/index');
const fastify = require('fastify')();

// The block 7-16 MUST precedes every other require of @opencensus. Try to move line 18 before line 7 and the tracing won't work
const tracing = require('@opencensus/nodejs');
tracing.start();

const zpages = require('@opencensus/exporter-zpages');
const options = {
  port: 8083,
  startServer: true,
};
const exporterZpages = new zpages.ZpagesExporter(options);
tracing.registerExporter(exporterZpages);

const {PrometheusStatsExporter} = require('@opencensus/exporter-prometheus');
const exporter = new PrometheusStatsExporter({
  port: 9464,
  startServer: true,
});
const exporter1 = new PrometheusStatsExporter({
  port: 9465,
  startServer: true,
  prefix: 'anotherProm',
});
// eslint-disable-next-line max-len
fastify.register(metricsPlugin, {interval: 2000, metricsExporter: [exporter, exporter1]});

fastify.get('/info', {
  schema: {hide: true},
}, (request, reply) => {
  reply.send('ok');
});

process.on('unhandledRejection', (reason) => {
  throw reason;
});
process.on('uncaughtException', (error) => {
  console.log(error);
});

fastify.listen(process.env.PORT || 3000, '0.0.0.0');
console.log('started');

