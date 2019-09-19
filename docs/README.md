**[fastify-opencensus](README.md)**

[Globals](README.md)

# fastify-opencensus

## Index

### Modules

* ["fastify"](modules/_fastify_.md)

### Classes

* [OpenCensusMetrics](classes/opencensusmetrics.md)

### Interfaces

* [Exporters](interfaces/exporters.md)
* [FastifyOpenCensus](interfaces/fastifyopencensus.md)
* [HTTPMetric](interfaces/httpmetric.md)
* [Metrics](interfaces/metrics.md)
* [PluginOptions](interfaces/pluginoptions.md)

### Functions

* [collectMetricsForUrl](README.md#const-collectmetricsforurl)
* [fastifyOpenCensusPlugin](README.md#const-fastifyopencensusplugin)
* [sinceInMilliseconds](README.md#sinceinmilliseconds)

### Object literals

* [errorTagKey](README.md#const-errortagkey)
* [methodTagKey](README.md#const-methodtagkey)
* [statusTagKey](README.md#const-statustagkey)

## Functions

### `Const` collectMetricsForUrl

▸ **collectMetricsForUrl**(`blacklist`: RegExp | Array‹string› | string | undefined, `url`: string): *boolean*

Defined in util.ts:1

**Parameters:**

Name | Type |
------ | ------ |
`blacklist` | RegExp &#124; Array‹string› &#124; string &#124; undefined |
`url` | string |

**Returns:** *boolean*

___

### `Const` fastifyOpenCensusPlugin

▸ **fastifyOpenCensusPlugin**(`fastify`: FastifyInstance, `__namedParameters`: object, `next`: fastifyPlugin.nextCallback): *void*

*Defined in [index.ts:46](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/index.ts#L46)*

Fastify OpenCensus plugin

**Parameters:**

▪ **fastify**: *FastifyInstance*

▪`Default value`  **__namedParameters**: *object*=  {}

Name | Type | Default |
------ | ------ | ------ |
`blacklist` | undefined &#124; string &#124; RegExp &#124; string[] | - |
`enableDefaultMetrics` | boolean | true |
`enableStats` | boolean | true |
`enableTracing` | boolean | false |
`endpoint` | undefined &#124; string | - |
`groupStatusCodes` | boolean | false |
`interval` | number | 5000 |
`metrics` | [Metrics](interfaces/metrics.md) | - |
`metricsExporter` | undefined &#124; StatsEventListener[] | - |
`pluginName` | string | "opencensus" |
`prefix` | undefined &#124; string | - |
`register` | undefined &#124; Stats | - |
`tracing` | undefined &#124; Tracing | - |
`tracingExporter` | undefined &#124; Exporter[] | - |
`zPagesOptions` | undefined &#124; __type | - |

▪ **next**: *fastifyPlugin.nextCallback*

**Returns:** *void*

___

###  sinceInMilliseconds

▸ **sinceInMilliseconds**(`startNanoseconds`: number): *number*

Defined in util.ts:19

**Parameters:**

Name | Type |
------ | ------ |
`startNanoseconds` | number |

**Returns:** *number*

## Object literals

### `Const` errorTagKey

### ▪ **errorTagKey**: *object*

Defined in stat.ts:8

###  name

• **name**: *string* = "route"

Defined in stat.ts:8

___

### `Const` methodTagKey

### ▪ **methodTagKey**: *object*

Defined in stat.ts:6

###  name

• **name**: *string* = "method"

Defined in stat.ts:6

___

### `Const` statusTagKey

### ▪ **statusTagKey**: *object*

Defined in stat.ts:7

###  name

• **name**: *string* = "status_code"

Defined in stat.ts:7