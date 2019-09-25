[fastify-opencensus](../README.md) › [OpenCensusMetrics](opencensusmetrics.md)

# Class: OpenCensusMetrics

## Hierarchy

- **OpenCensusMetrics**

## Index

### Constructors

- [constructor](opencensusmetrics.md#constructor)

### Properties

- [mLatency](opencensusmetrics.md#mlatency)
- [stats](opencensusmetrics.md#stats)

### Methods

- [createMetrics](opencensusmetrics.md#createmetrics)
- [recordLatencyMeasurement](opencensusmetrics.md#recordlatencymeasurement)

## Constructors

### constructor

\+ **new OpenCensusMetrics**(`_stats`: Stats, `metricsExporters?`: Array‹StatsEventListener›): _[OpenCensusMetrics](opencensusmetrics.md)_

_Defined in [stat.ts:12](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/stat.ts#L12)_

**Parameters:**

| Name                | Type                      |
| ------------------- | ------------------------- |
| `_stats`            | Stats                     |
| `metricsExporters?` | Array‹StatsEventListener› |

**Returns:** _[OpenCensusMetrics](opencensusmetrics.md)_

## Properties

### mLatency

• **mLatency**: _Measure_

_Defined in [stat.ts:11](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/stat.ts#L11)_

---

### stats

• **stats**: _Stats_

_Defined in [stat.ts:12](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/stat.ts#L12)_

## Methods

### createMetrics

▸ **createMetrics**(`metrics`: [Metrics](../interfaces/metrics.md), `_prefix?`: undefined | string): _void_

_Defined in [stat.ts:22](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/stat.ts#L22)_

**Parameters:**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| `metrics`  | [Metrics](../interfaces/metrics.md) |
| `_prefix?` | undefined &#124; string             |

**Returns:** _void_

---

### recordLatencyMeasurement

▸ **recordLatencyMeasurement**(`_value`: number, `method`: string, `statusCode`: string | number, `routeId`: string): _void_

_Defined in [stat.ts:59](https://github.com/rhaymo/fastify-opencensus/blob/a41dab0/src/stat.ts#L59)_

**Parameters:**

| Name         | Type                 |
| ------------ | -------------------- |
| `_value`     | number               |
| `method`     | string               |
| `statusCode` | string &#124; number |
| `routeId`    | string               |

**Returns:** _void_
