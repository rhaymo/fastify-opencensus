**[fastify-opencensus](../README.md)**

[Globals](../README.md) › [Metrics](metrics.md)

# Interface: Metrics

## Hierarchy

* **Metrics**

## Index

### Properties

* [count](metrics.md#optional-count)
* [distribution](metrics.md#optional-distribution)
* [sum](metrics.md#optional-sum)

## Properties

### `Optional` count

• **count**? : *[HTTPMetric](httpmetric.md)*

*Defined in [plugin.ts:27](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L27)*

http request count

___

### `Optional` distribution

• **distribution**? : *[HTTPMetric](httpmetric.md)*

*Defined in [plugin.ts:22](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L22)*

http request durations

___

### `Optional` sum

• **sum**? : *[HTTPMetric](httpmetric.md)*

*Defined in [plugin.ts:32](https://github.com/SkeLLLa/fastify-metrics/blob/38505d8/src/plugin.ts#L32)*

http request duration sum