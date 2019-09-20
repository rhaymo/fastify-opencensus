import {
    Stats, MeasureUnit, AggregationType, TagMap, Measure, View, Tracing, StatsEventListener
} from '@opencensus/core';
import { Metrics } from './plugin';

const methodTagKey = { name: 'method' };
const statusTagKey = { name: 'status_code' };
const errorTagKey = { name: 'route' };

class OpenCensusMetrics {
    mLatency: Measure;
    stats: Stats;

    constructor(_stats: Stats, metricsExporters?: Array<StatsEventListener>) {
        this.stats = _stats;

        if (metricsExporters) {
            metricsExporters.forEach((metricExporter) => { this.stats.registerExporter(metricExporter); });
        }
    }

    createMetrics(metrics: Metrics, _prefix?: string): void {
        // The latency in milliseconds
        this.mLatency = this.stats.createMeasureDouble(
            'http_request_duration_seconds',
            MeasureUnit.SEC,
            'http request duration in seconds'
        );

        const latencyDistribution: View = this.stats.createView(
            metrics.distribution && metrics.distribution.name || `${_prefix}http_request_duration_seconds`,
            this.mLatency,
            AggregationType.DISTRIBUTION,
            [methodTagKey, statusTagKey, errorTagKey],
            metrics.distribution && metrics.distribution.desc || 'The distribution of the latencies',
            metrics.distribution && metrics.distribution.buckets || [0.05, 0.1, 0.5, 1, 3, 5, 10]
        );
        this.stats.registerView(latencyDistribution);

        const httpRequestCount: View = this.stats.createView(
            metrics.count && metrics.count.name || `${_prefix}http_request_count`,
            this.mLatency,
            AggregationType.COUNT,
            [methodTagKey, statusTagKey, errorTagKey],
            metrics.count && metrics.count.desc || 'Counter of http request'
        );
        this.stats.registerView(httpRequestCount);

        const httpRequestDurationSum: View = this.stats.createView(
            metrics.sum && metrics.sum.name || `${_prefix}http_sum_request_duration_seconds`,
            this.mLatency,
            AggregationType.SUM,
            [methodTagKey, statusTagKey, errorTagKey],
            metrics.sum && metrics.sum.desc || 'Sum of durations of http request'
        );
        this.stats.registerView(httpRequestDurationSum);
    }

    recordLatencyMeasurement(_value: number, method: string, statusCode: string | number, routeId: string): void {
        const tags = new TagMap();
        tags.set(methodTagKey, { value: method || 'UNKNOWN' });
        tags.set(statusTagKey, { value: '' + statusCode });
        tags.set(errorTagKey, { value: routeId });

        this.stats.record([{
            measure: this.mLatency,
            value: _value
        }], tags);
    }

    /*
    startTracing(tracingOptions) {
        this.tracing.start(tracingOptions);
    }

    startZPagesServer(options) {
        const defaultOptions = {
            port: 8081,
            startServer: true
        };

        const _options = Object.assign(defaultOptions, options);

        const zpages = require('@opencensus/exporter-zpages');
        const exporter = new zpages.ZpagesExporter(_options);
        this.tracing.registerExporter(exporter);
    }
    */
}

export = OpenCensusMetrics;
