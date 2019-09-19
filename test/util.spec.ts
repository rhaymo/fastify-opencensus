import 'jest';

import { collectMetricsForUrl , sinceInMilliseconds} from '../src/util';

describe('util', () => {
    describe('collectMetricsForUrl', () => {

        test('empty blacklists should return true', async () => {
            const url='/blacklisted';
            expect(collectMetricsForUrl(undefined, url)).toEqual(true);
        });

        test('blacklisted string should return false', async () => {
            const blacklist: string = '/blacklisted';
            const url='/blacklisted?bla=po';
            expect(collectMetricsForUrl(blacklist, url)).toEqual(false);
        });

        test('blacklisted url in Array should return false', async () => {
            const blacklist: string = '/blacklisted';
            const url='/blacklisted';
            expect(collectMetricsForUrl([blacklist], url)).toEqual(false);
        });

        test('blacklisted url matching a regexp should return false', async () => {
            const url='/blacklisted';
            expect(collectMetricsForUrl(new RegExp('black'), url)).toEqual(false);
        });

        test('not blacklisted string should return true', async () => {
            const blacklist: string = 'blacklisted';
            const url='/notblacklisted';
            expect(collectMetricsForUrl(blacklist, url)).toEqual(true);
        });

        test('blacklisted url in Array should return true', async () => {
            const blacklist: string = '/blacklisted';
            const url='/notblacklisted';
            expect(collectMetricsForUrl([blacklist], url)).toEqual(true);
        });

        test('blacklisted url matching a regexp should return true', async () => {
            const url='/whitelisted';
            expect(collectMetricsForUrl(new RegExp('black'), url)).toEqual(true);
        });

    });

    describe('sinceInMilliseconds', () => {
        test('blacklisted url matching a regexp should return true', async () => {
            const url='/whitelisted';
            expect(typeof sinceInMilliseconds(process.hrtime()[1])).toBe('number');
        });
    });
});
