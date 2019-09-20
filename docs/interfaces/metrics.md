[fastify-opencensus](../README.md) › [Metrics](metrics.md)

# Interface: Metrics

## Hierarchy

- **Metrics**

## Index

### Properties

- [count](metrics.md#optional-count)
- [distribution](metrics.md#optional-distribution)
- [sum](metrics.md#optional-sum)

## Properties

### `Optional` count

• **count**? : _[HTTPMetric](httpmetric.md)_

_Defined in [plugin.ts:27](https://github.com/rhaymo/fastify-opencensus/blob/a531454/src/plugin.ts#L27)_

http request count

---

### `Optional` distribution

• **distribution**? : _[HTTPMetric](httpmetric.md)_

_Defined in [plugin.ts:22](https://github.com/rhaymo/fastify-opencensus/blob/a531454/src/plugin.ts#L22)_

http request durations

---

### `Optional` sum

• **sum**? : _[HTTPMetric](httpmetric.md)_

_Defined in [plugin.ts:32](https://github.com/rhaymo/fastify-opencensus/blob/a531454/src/plugin.ts#L32)_

http request duration sum
