export const collectMetricsForUrl = (blacklist: RegExp | Array<string> | string | undefined, url: string): boolean => {
  const queryIndex = url.indexOf('?');
  url = queryIndex === -1 ? url : url.substring(0, queryIndex);
  if (!blacklist) {
    return true;
  }
  if (Array.isArray(blacklist)) {
    return blacklist.indexOf(url) === -1;
  }
  if (typeof blacklist === 'string') {
    return blacklist !== url;
  }
  if (typeof blacklist.test === 'function') {
    return !blacklist.test(url);
  }
  return false;
};

export function sinceInMilliseconds(startNanoseconds: number) {
  return (process.hrtime()[1] - startNanoseconds) / 1e6;
}
