[fastify-opencensus](../README.md) › [PluginOptions](pluginoptions.md)

# Interface: PluginOptions

## Hierarchy

- **PluginOptions**

## Index

### Properties

- [blacklist](pluginoptions.md#optional-blacklist)
- [enableDefaultMetrics](pluginoptions.md#optional-enabledefaultmetrics)
- [enableStats](pluginoptions.md#optional-enablestats)
- [endpoint](pluginoptions.md#optional-endpoint)
- [groupStatusCodes](pluginoptions.md#optional-groupstatuscodes)
- [interval](pluginoptions.md#optional-interval)
- [metrics](pluginoptions.md#optional-metrics)
- [metricsExporter](pluginoptions.md#optional-metricsexporter)
- [pluginName](pluginoptions.md#optional-pluginname)
- [prefix](pluginoptions.md#optional-prefix)
- [stats](pluginoptions.md#optional-stats)

## Properties

### `Optional` blacklist

• **blacklist**? : _RegExp | Array‹string› | string_

_Defined in [plugin.ts:82](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/plugin.ts#L82)_

Routes blacklist that will be excluded from metrics collection

---

### `Optional` enableDefaultMetrics

• **enableDefaultMetrics**? : _undefined | false | true_

_Defined in [plugin.ts:56](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/plugin.ts#L56)_

Enable default nodejs metrics

**`default`** true

---

### `Optional` enableStats

• **enableStats**? : _undefined | false | true_

_Defined in [plugin.ts:62](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/plugin.ts#L62)_

Enable stats metrics for http route

**`default`** true

---

### `Optional` endpoint

• **endpoint**? : _undefined | string_

_Defined in [plugin.ts:95](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/plugin.ts#L95)_

Metrics endpoint for Prometheus

---

### `Optional` groupStatusCodes

• **groupStatusCodes**? : _undefined | false | true_

_Defined in [plugin.ts:68](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/plugin.ts#L68)_

Groups status code labels by first digit 200 -> 2XX

**`default`** false

---

### `Optional` interval

• **interval**? : _undefined | number_

_Defined in [plugin.ts:78](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/plugin.ts#L78)_

Metrics collection interval in ms

**`default`** 5000

---

### `Optional` metrics

• **metrics**? : _[Metrics](metrics.md)_

_Defined in [plugin.ts:99](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/plugin.ts#L99)_

HTTP metrics overrides

---

### `Optional` metricsExporter

• **metricsExporter**? : _Array‹StatsEventListener›_

_Defined in [plugin.ts:101](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/plugin.ts#L101)_

---

### `Optional` pluginName

• **pluginName**? : _undefined | string_

_Defined in [plugin.ts:73](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/plugin.ts#L73)_

Plugin name that will be registered in fastify

**`default`** opencensus

---

### `Optional` prefix

• **prefix**? : _undefined | string_

_Defined in [plugin.ts:91](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/plugin.ts#L91)_

Metrics prefix

---

### `Optional` stats

• **stats**? : _Stats_

_Defined in [plugin.ts:86](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/plugin.ts#L86)_

opencensus registry for default metrics and route metrics
