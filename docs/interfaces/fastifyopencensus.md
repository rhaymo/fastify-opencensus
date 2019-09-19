**[fastify-opencensus](../README.md)**

[Globals](../README.md) › [FastifyOpenCensus](fastifyopencensus.md)

# Interface: FastifyOpenCensus

## Hierarchy

* **FastifyOpenCensus**

## Indexable

* \[ **key**: *string*\]: any

Additional objects to store your metrics, registries, etc.

## Index

### Properties

* [client](fastifyopencensus.md#client)
* [tracing](fastifyopencensus.md#tracing)

### Methods

* [clearRegister](fastifyopencensus.md#optional-clearregister)

## Properties

###  client

• **client**: *Stats*

*Defined in [plugin.ts:39](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L39)*

global Stats of opencensus

___

###  tracing

• **tracing**: *Tracing*

*Defined in [plugin.ts:44](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L44)*

tracing of opencensus

## Methods

### `Optional` clearRegister

▸ **clearRegister**(): *void*

*Defined in [plugin.ts:49](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L49)*

Expose register clear function if register was provided

**Returns:** *void*