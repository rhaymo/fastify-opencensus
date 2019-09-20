import 'jest';

import OpenCensusMetrics from '../src/stat';
import { globalStats } from '@opencensus/core';

describe('OpenCensusMetrics', () => {
    test('createMetrics', async () => {
        const openCensusMetrics: OpenCensusMetrics = new OpenCensusMetrics(globalStats);
        openCensusMetrics.createMetrics({}, 'myprefix_' );
        const metrics = globalStats.getMetrics();
      expect(metrics).toHaveLength(3);

      expect(metrics[0].descriptor.description).toEqual('The distribution of the latencies');
      expect(metrics[0].descriptor.name).toEqual('myprefix_http_request_duration_seconds');
    });
});
