// How to set multiple metric exporters and a zipkin traces exporter

const metricsPlugin = require('../dist/index');
const fastify = require('fastify')();


const tracing = require('@opencensus/nodejs');
tracing.start();
const {ZipkinTraceExporter} = require('@opencensus/exporter-zipkin');
const zipkinOptions = {
  url: 'http://localhost:9411/api/v2/spans',
  serviceName: 'myZipkinExample2',
};
const zipkinExporter = new ZipkinTraceExporter(zipkinOptions);
tracing.registerExporter(zipkinExporter);

const {PrometheusStatsExporter} = require('@opencensus/exporter-prometheus');
const exporter = new PrometheusStatsExporter({
  port: 9464,
  startServer: true,
});
fastify.register(metricsPlugin, {interval: 2000, metricsExporter: [exporter]});

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

