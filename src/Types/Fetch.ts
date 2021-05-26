type Fetch = {
  get: <T = any>(uri: string, headers?: any[]) => (path?: string, headersOverride?: any[]) => Promise<T>;
  post: <T = any, D = any>(uri: string, headers?: any) => (data: D, path?: string, headersOverride?: any) => Promise<T>;
  put: <T = any, D = any>(
    uri: string,
    headers?: any[],
  ) => (data: D, path?: string, headersOverride?: any[]) => Promise<T>;
  patch: <T = any, D = any>(
    uri: string,
    headers?: any[],
  ) => (data: Partial<D>, path?: string, headersOverride?: any[]) => Promise<T>;
  delete: <T = any>(uri: string, headers?: any[]) => (path?: string, headersOverride?: any[]) => Promise<T>;
};

export default Fetch;
