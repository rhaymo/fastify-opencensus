**[fastify-opencensus](../README.md)**

[Globals](../README.md) › [PluginOptions](pluginoptions.md)

# Interface: PluginOptions

## Hierarchy

* **PluginOptions**

## Index

### Properties

* [blacklist](pluginoptions.md#optional-blacklist)
* [enableDefaultMetrics](pluginoptions.md#optional-enabledefaultmetrics)
* [enableStats](pluginoptions.md#optional-enablestats)
* [enableTracing](pluginoptions.md#optional-enabletracing)
* [endpoint](pluginoptions.md#optional-endpoint)
* [groupStatusCodes](pluginoptions.md#optional-groupstatuscodes)
* [interval](pluginoptions.md#optional-interval)
* [metrics](pluginoptions.md#optional-metrics)
* [metricsExporter](pluginoptions.md#optional-metricsexporter)
* [pluginName](pluginoptions.md#optional-pluginname)
* [prefix](pluginoptions.md#optional-prefix)
* [register](pluginoptions.md#optional-register)
* [tracing](pluginoptions.md#optional-tracing)
* [tracingExporter](pluginoptions.md#optional-tracingexporter)
* [zPagesOptions](pluginoptions.md#optional-zpagesoptions)

## Properties

### `Optional` blacklist

• **blacklist**? : *RegExp | Array‹string› | string*

*Defined in [plugin.ts:99](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L99)*

Routes blacklist that will be excluded from metrics collection

___

### `Optional` enableDefaultMetrics

• **enableDefaultMetrics**? : *undefined | false | true*

*Defined in [plugin.ts:61](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L61)*

Enable default nodejs metrics

**`default`** true

___

### `Optional` enableStats

• **enableStats**? : *undefined | false | true*

*Defined in [plugin.ts:67](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L67)*

Enable stats metrics for http route

**`default`** true

___

### `Optional` enableTracing

• **enableTracing**? : *undefined | false | true*

*Defined in [plugin.ts:73](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L73)*

Enable tracing for http route

**`default`** false

___

### `Optional` endpoint

• **endpoint**? : *undefined | string*

*Defined in [plugin.ts:117](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L117)*

Metrics endpoint for Prometheus

___

### `Optional` groupStatusCodes

• **groupStatusCodes**? : *undefined | false | true*

*Defined in [plugin.ts:85](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L85)*

Groups status code labels by first digit 200 -> 2XX

**`default`** false

___

### `Optional` interval

• **interval**? : *undefined | number*

*Defined in [plugin.ts:95](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L95)*

Metrics collection interval in ms

**`default`** 5000

___

### `Optional` metrics

• **metrics**? : *[Metrics](metrics.md)*

*Defined in [plugin.ts:121](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L121)*

HTTP metrics overrides

___

### `Optional` metricsExporter

• **metricsExporter**? : *Array‹StatsEventListener›*

*Defined in [plugin.ts:123](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L123)*

___

### `Optional` pluginName

• **pluginName**? : *undefined | string*

*Defined in [plugin.ts:90](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L90)*

Plugin name that will be registered in fastify

**`default`** opencensus

___

### `Optional` prefix

• **prefix**? : *undefined | string*

*Defined in [plugin.ts:113](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L113)*

Metrics prefix

___

### `Optional` register

• **register**? : *Stats*

*Defined in [plugin.ts:103](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L103)*

opencensus registry for default metrics and route metrics

___

### `Optional` tracing

• **tracing**? : *Tracing*

*Defined in [plugin.ts:108](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L108)*

opencensus tracing object

___

### `Optional` tracingExporter

• **tracingExporter**? : *Array‹Exporter›*

*Defined in [plugin.ts:125](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L125)*

___

### `Optional` zPagesOptions

• **zPagesOptions**? : *undefined | __type*

*Defined in [plugin.ts:79](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L79)*

If this parameter is present, zPages server is enabled

**`default`** false