const metricsPlugin = require('../dist/index');
const fastify = require('fastify')();


const {PrometheusStatsExporter} = require('@opencensus/exporter-prometheus');
const exporter = new PrometheusStatsExporter({
  port: 9464,
  startServer: true,
});
fastify.register(metricsPlugin, {metricsExporter: [exporter]});

fastify.get('/info', {
  schema: {hide: true},
}, async (request, reply) => {
  reply.send('ok');
});


fastify.listen(process.env.PORT || 3000, '0.0.0.0');
console.log('started');


process.on('unhandledRejection', (reason) => {
  throw reason;
});
process.on('uncaughtException', (error) => {
  console.log(error);
});


