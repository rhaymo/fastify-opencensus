**[fastify-opencensus](../README.md)**

[Globals](../README.md) › [OpenCensusMetrics](opencensusmetrics.md)

# Class: OpenCensusMetrics

## Hierarchy

* **OpenCensusMetrics**

## Index

### Constructors

* [constructor](opencensusmetrics.md#constructor)

### Properties

* [mLatency](opencensusmetrics.md#mlatency)
* [stats](opencensusmetrics.md#stats)
* [tracing](opencensusmetrics.md#tracing)

### Methods

* [createMetrics](opencensusmetrics.md#createmetrics)
* [recordLatencyMeasurement](opencensusmetrics.md#recordlatencymeasurement)
* [startTracing](opencensusmetrics.md#starttracing)
* [startZPagesServer](opencensusmetrics.md#startzpagesserver)

## Constructors

###  constructor

\+ **new OpenCensusMetrics**(`_stats`: Stats, `_tracing`: Tracing, `exporters?`: [Exporters](../interfaces/exporters.md)): *[OpenCensusMetrics](opencensusmetrics.md)*

Defined in stat.ts:20

**Parameters:**

Name | Type |
------ | ------ |
`_stats` | Stats |
`_tracing` | Tracing |
`exporters?` | [Exporters](../interfaces/exporters.md) |

**Returns:** *[OpenCensusMetrics](opencensusmetrics.md)*

## Properties

###  mLatency

• **mLatency**: *Measure*

Defined in stat.ts:18

___

###  stats

• **stats**: *Stats*

Defined in stat.ts:19

___

###  tracing

• **tracing**: *Tracing*

Defined in stat.ts:20

## Methods

###  createMetrics

▸ **createMetrics**(`metrics`: [Metrics](../interfaces/metrics.md), `_prefix?`: undefined | string): *void*

Defined in stat.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`metrics` | [Metrics](../interfaces/metrics.md) |
`_prefix?` | undefined &#124; string |

**Returns:** *void*

___

###  recordLatencyMeasurement

▸ **recordLatencyMeasurement**(`_value`: number, `method`: string, `statusCode`: string | number, `routeId`: string): *void*

Defined in stat.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`_value` | number |
`method` | string |
`statusCode` | string &#124; number |
`routeId` | string |

**Returns:** *void*

___

###  startTracing

▸ **startTracing**(): *void*

Defined in stat.ts:85

**Returns:** *void*

___

###  startZPagesServer

▸ **startZPagesServer**(`options`: any): *void*

Defined in stat.ts:89

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *void*