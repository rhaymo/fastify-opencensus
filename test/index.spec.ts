import 'jest';
import fastifyOpenCensus = require('../src/index');
import Fastify from 'fastify';
import request from 'supertest';
import { globalStats } from '@opencensus/core';

const { name } = require('../package.json');

describe(name, () => {
  test('fastify plugin exported', async () => {
    expect(fastifyOpenCensus).toBeDefined();
  });

  test('fastify should load the plugin', (done) => {
    const app = Fastify();
    app.register(fastifyOpenCensus);
    app.ready((err) => {
      expect(err).toBeNull();
      done();
    });
  });

  test('Route and default stats enabled by default', async () => {
    const app = Fastify();
    globalStats.clear();
    app.register(fastifyOpenCensus);

    return app.ready()
      .then(() => {
        expect(globalStats.getMetrics()).toHaveLength(27);
      });
  });

  test('enableDefaultMetrics to false not collect node default metrics', async () => {
    const app = Fastify();
    globalStats.clear();
    app.register(fastifyOpenCensus, {enableDefaultMetrics: false});

    return app.ready()
      .then(() => {
        expect(globalStats.getMetrics()).toHaveLength(3);
      });
  });

  test('enableStats to false not collect route metrics', async () => {
    const app = Fastify();
    globalStats.clear();
    app.register(fastifyOpenCensus, {enableStats: false, enableDefaultMetrics: false});

    return app.ready()
      .then(() => {
        expect(globalStats.getMetrics()).toHaveLength(0);
      });
  });

  test('All Route stats are collected by default', async () => {
    const app = Fastify();
    globalStats.clear();
    app.register(fastifyOpenCensus);

    return app.ready()
      .then(() => request(app.server).get('/test'))
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(globalStats.getMetrics()[0].timeseries[0].labelValues).toEqual([ { value: 'GET' }, { value: '404' }, { value: '/test' } ]);
      });
  });

  test('Blacklisted route stats are not collected', async () => {
    const app = Fastify();
    globalStats.clear();
    app.register(fastifyOpenCensus, {blacklist: '/blacklisted'});

    return app.ready()
      .then(() => request(app.server).get('/blacklisted'))
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(globalStats.getMetrics()[0].timeseries).toEqual([]);
      });
  });
});
