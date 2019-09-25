# fastify-opencensus

[![Node version](https://img.shields.io/node/v/fastify-opencensus)]()
[![Downloads Count](https://img.shields.io/npm/dm/fastify-opencensus)]()
[![Build Status](https://travis-ci.org/rhaymo/fastify-opencensus.svg?branch=master)](https://travis-ci.org/rhaymo/fastify-opencensus)
[![Known Vulnerabilities](https://snyk.io//test/github/rhaymo/fastify-opencensus/badge.svg?targetFile=package.json)](https://snyk.io//test/github/rhaymo/fastify-opencensus?targetFile=package.json)
[![Coverage Status](https://coveralls.io/repos/github/rhaymo/fastify-opencensus/badge.svg?branch=master)](https://coveralls.io/github/rhaymo/fastify-opencensus?branch=master)
[![License](https://img.shields.io/github/license/rhaymo/fastify-opencensus)](https://github.com/rhaymo/fastify-opencensus/blob/master/LICENSE)

Metrics collector for Fastify based on [Opencensus](https://opencensus.io/) .

This module is inspired and based on the [fastify-metrics](https://gitlab.com/m03geek/fastify-metrics) plugin.

This plugin adds 3 http metrics for your routes:

- Requests duration distribution
- Requests duration summary
- Requests count

## ToC

- [fastify-opencensus](#fastify-opencensus)
  - [ToC](#ToC)
  - [Fastify support](#Fastify-support)
  - [Installation](#Installation)
  - [Features and requirements](#Features-and-requirements)
  - [Usage](#Usage)
    - [Plugin options](#Plugin-options)
      - [Metrics details](#Metrics-details)
    - [HTTP routes metrics](#HTTP-routes-metrics)
  - [Docs](#Docs)
  - [Changelog](#Changelog)
  - [See also](#See-also)
  - [License](#License)

## Fastify support

- **v0.x.x** - will support `>= fastify-2.0.0`

## Installation

```sh
npm i fastify-opencensus --save
```

<sub>[Back to top](#toc)</sub>

## Features and requirements

- Collects default server metrics (see [opencensus-default-metrics](https://github.com/rhaymo/opencensus-node-default-metrics));
- Collects route response timings
- By default, metrics info are collected into the global instance of opencensus required by this package. If you want to use another opencensus version, you have to pass in this instance using the `stats` options field.

---

- Requires fastify `>=2.0.0`.
- Node.js `>=8.9.0`.

<sub>[Back to top](#toc)</sub>

## Usage

Add it to your project like regular fastify plugin. Use `register` method and pass options to it.

```js
const fastify = require('fastify');
const app = fastify();

const metricsPlugin = require('fastify-opencensus');
app.register(metricsPlugin, { interval: 3000 });
```

It also exports opencensus stats instance to fastify instance `fastify.opencensus.client` which you may use it in your routes.

See example folder for other examples.

<sub>[Back to top](#toc)</sub>

### Plugin options

| parameter              | type                     | description                                                                     | default      |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------------- | ------------ |
| `enableDefaultMetrics` | Boolean                  | Enables collection of node default metrics.                                     | `true`       |
| `enableStats`          | Boolean                  | Enables collection of fastify metrics.                                          | `true`       |
| `stats`                | Object                   | Custom opencensus metrics instance.                                             | `undefined`  |
| `metricsExporter`      | Array<Object>            | Array of Opencensus metrics exporter                                            | `undefined`  |
| `groupStatusCodes`     | Boolean                  | Groups status codes (e.g. 2XX) if `true`                                        | `false`      |
| `pluginName`           | String                   | Change name which you'll use to access opencensus registry instance in fastify. | `opencensus` |
| `interval`             | Number                   | Default metrics collection interval in ms.                                      | `5000`       |
| `blacklist`            | String, RegExp, String[] | Skip metrics collection for blacklisted routes                                  | `undefined`  |
| `prefix`               | String                   | Custom default metrics prefix.                                                  | `""`         |
| `metrics`              | Object                   | Allows override default metrics config. See section below.                      | `{}`         |

#### Metrics details

You may override default metrics settings. You may provide overrides for three metrics tracking http request durations, count and sum (labelNames cannot be overriden).
Default values:

```js
{
  distribution: {
    name: 'http_request_duration_seconds',
    desc: 'request duration in seconds',
    labelNames: ['status_code', 'method', 'route'],
    buckets: [0.05, 0.1, 0.5, 1, 3, 5, 10],
  },
  sum: {
    name: 'http_sum_request_duration_seconds',
    desc: 'Sum of durations of http requests',
    labelNames: ['status_code', 'method', 'route']
  },
  count: {
    name: 'http_request_count',
    desc: 'Counter of http requests',
    labelNames: ['status_code', 'method', 'route']
  },
}
```

Override should look like:

```js
const fastify = require('fastify');
const app = fastify();
const metricsPlugin = require('fastify-metrics');

app.register(metricsPlugin, {metrics: {
  distribution: {
    name: 'my_custom_http_request_duration_seconds',
    buckets: [0.1, 0.5, 1, 3, 5],
  },
  sum: {
    desc: 'custom request duration in seconds summary help'
  },
});
```

<sub>[Back to top](#toc)</sub>

### HTTP routes metrics

The following table shows what metrics will be available in Prometheus. Note suffixes like `_bucket`, `_sum`, `_count` are added automatically.

| metric                              | labels                           | description                  |
| ----------------------------------- | -------------------------------- | ---------------------------- |
| `http_request_count`                | `method`, `route`, `status_code` | Requests total count         |
| `http_request_duration_seconds`     | `method`, `route`, `status_code` | Requests durations by bucket |
| `http_sum_request_duration_seconds` | `method`, `route`, `status_code` | Requests duration sum        |

<sub>[Back to top](#toc)</sub>

## Docs

See [docs](docs/README.md).

<sub>[Back to top](#toc)</sub>

## Changelog

See [changelog](CHANGELOG.md).

<sub>[Back to top](#toc)</sub>

## See also

- [opencensus-default-metrics](https://github.com/rhaymo/opencensus-node-default-metrics) - collector of node default metrics using opencensus

<sub>[Back to top](#toc)</sub>

## License

Licensed under [MIT](./LICENSE).

<sub>[Back to top](#toc)</sub>
