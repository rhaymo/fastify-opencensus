[fastify-opencensus](../README.md) › [FastifyOpenCensus](fastifyopencensus.md)

# Interface: FastifyOpenCensus

## Hierarchy

- **FastifyOpenCensus**

## Indexable

- \[ **key**: _string_\]: any

Additional objects to store your metrics, registries, etc.

## Index

### Properties

- [client](fastifyopencensus.md#client)

### Methods

- [clearRegister](fastifyopencensus.md#optional-clearregister)

## Properties

### client

• **client**: _Stats_

_Defined in [plugin.ts:39](https://github.com/rhaymo/fastify-opencensus/blob/a531454/src/plugin.ts#L39)_

global Stats of opencensus

## Methods

### `Optional` clearRegister

▸ **clearRegister**(): _void_

_Defined in [plugin.ts:44](https://github.com/rhaymo/fastify-opencensus/blob/a531454/src/plugin.ts#L44)_

Expose register clear function if register was provided

**Returns:** _void_
