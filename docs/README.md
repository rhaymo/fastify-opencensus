[fastify-opencensus](README.md)

# fastify-opencensus

## Index

### Modules

- ["fastify"](modules/_fastify_.md)

### Classes

- [OpenCensusMetrics](classes/opencensusmetrics.md)

### Interfaces

- [FastifyOpenCensus](interfaces/fastifyopencensus.md)
- [HTTPMetric](interfaces/httpmetric.md)
- [Metrics](interfaces/metrics.md)
- [PluginOptions](interfaces/pluginoptions.md)

### Functions

- [collectMetricsForUrl](README.md#const-collectmetricsforurl)
- [fastifyOpenCensusPlugin](README.md#const-fastifyopencensusplugin)
- [sinceInMilliseconds](README.md#sinceinmilliseconds)

### Object literals

- [errorTagKey](README.md#const-errortagkey)
- [methodTagKey](README.md#const-methodtagkey)
- [statusTagKey](README.md#const-statustagkey)

## Functions

### `Const` collectMetricsForUrl

▸ **collectMetricsForUrl**(`blacklist`: RegExp | Array‹string› | string | undefined, `url`: string): _boolean_

_Defined in [util.ts:1](https://github.com/rhaymo/fastify-opencensus/blob/a531454/src/util.ts#L1)_

**Parameters:**

| Name        | Type                                                       |
| ----------- | ---------------------------------------------------------- |
| `blacklist` | RegExp &#124; Array‹string› &#124; string &#124; undefined |
| `url`       | string                                                     |

**Returns:** _boolean_

---

### `Const` fastifyOpenCensusPlugin

▸ **fastifyOpenCensusPlugin**(`fastify`: FastifyInstance, `__namedParameters`: object, `next`: fastifyPlugin.nextCallback): _void_

_Defined in [index.ts:46](https://github.com/rhaymo/fastify-opencensus/blob/a531454/src/index.ts#L46)_

Fastify OpenCensus plugin

**Parameters:**

▪ **fastify**: _FastifyInstance_

▪`Default value` **\_\_namedParameters**: _object_= {}

| Name                   | Type                                                  | Default      |
| ---------------------- | ----------------------------------------------------- | ------------ |
| `blacklist`            | undefined &#124; string &#124; RegExp &#124; string[] | -            |
| `enableDefaultMetrics` | boolean                                               | true         |
| `enableStats`          | boolean                                               | true         |
| `groupStatusCodes`     | boolean                                               | false        |
| `interval`             | number                                                | 5000         |
| `metrics`              | [Metrics](interfaces/metrics.md)                      | -            |
| `metricsExporter`      | undefined &#124; StatsEventListener[]                 | -            |
| `pluginName`           | string                                                | "opencensus" |
| `prefix`               | undefined &#124; string                               | -            |
| `stats`                | Stats                                                 | globalStats  |

▪ **next**: _fastifyPlugin.nextCallback_

**Returns:** _void_

---

### sinceInMilliseconds

▸ **sinceInMilliseconds**(`startNanoseconds`: number): _number_

_Defined in [util.ts:19](https://github.com/rhaymo/fastify-opencensus/blob/a531454/src/util.ts#L19)_

**Parameters:**

| Name               | Type   |
| ------------------ | ------ |
| `startNanoseconds` | number |

**Returns:** _number_

## Object literals

### `Const` errorTagKey

### ▪ **errorTagKey**: _object_

_Defined in [stat.ts:8](https://github.com/rhaymo/fastify-opencensus/blob/a531454/src/stat.ts#L8)_

### name

• **name**: _string_ = "route"

_Defined in [stat.ts:8](https://github.com/rhaymo/fastify-opencensus/blob/a531454/src/stat.ts#L8)_

---

### `Const` methodTagKey

### ▪ **methodTagKey**: _object_

_Defined in [stat.ts:6](https://github.com/rhaymo/fastify-opencensus/blob/a531454/src/stat.ts#L6)_

### name

• **name**: _string_ = "method"

_Defined in [stat.ts:6](https://github.com/rhaymo/fastify-opencensus/blob/a531454/src/stat.ts#L6)_

---

### `Const` statusTagKey

### ▪ **statusTagKey**: _object_

_Defined in [stat.ts:7](https://github.com/rhaymo/fastify-opencensus/blob/a531454/src/stat.ts#L7)_

### name

• **name**: _string_ = "status_code"

_Defined in [stat.ts:7](https://github.com/rhaymo/fastify-opencensus/blob/a531454/src/stat.ts#L7)_
