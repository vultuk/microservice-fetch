import axios, {AxiosResponse} from 'axios';
import {NextFunction, Request, Response} from 'express';

import Fetch from './Types/Fetch';

export * from './Types';

declare global {
  namespace Express {
    interface Request {
      fetch: Fetch;
    }
  }
}

export default () => (req: Request, res: Response, next: NextFunction) => {
  req.fetch = {
    get: <T = any>(uri: string, headers: any = {}) => (path: string = '', headersOverride: any = {}): Promise<T> =>
      axios
        .get<T>(
          `${uri}/${path}`,
          headers || headersOverride ? { headers: { ...headers, ...headersOverride } } : undefined,
        )
        .then((response: AxiosResponse<T>) => response.data),
    post: <T = any, D = any>(uri: string, headers: any = {}) => (
      data: D,
      path: string = '',
      headersOverride: any = {},
    ): Promise<T> =>
      axios
        .post<T>(
          `${uri}/${path}`,
          data,
          headers || headersOverride ? { headers: { ...headers, ...headersOverride } } : undefined,
        )
        .then((response: AxiosResponse<T>) => response.data),
    patch: <T = any, D = any>(uri: string, headers: any = {}) => (
      data: D,
      path: string = '',
      headersOverride: any = {},
    ): Promise<T> =>
      axios
        .patch<T>(
          `${uri}/${path}`,
          data,
          headers || headersOverride ? { headers: { ...headers, ...headersOverride } } : undefined,
        )
        .then((response: AxiosResponse<T>) => response.data),
    put: <T = any, D = any>(uri: string, headers: any = {}) => (
      data: D,
      path: string = '',
      headersOverride: any = {},
    ): Promise<T> =>
      axios
        .put<T>(
          `${uri}/${path}`,
          data,
          headers || headersOverride ? { headers: { ...headers, ...headersOverride } } : undefined,
        )
        .then((response: AxiosResponse<T>) => response.data),
    delete: <T = any>(uri: string, headers: any = {}) => (path: string = '', headersOverride: any = {}): Promise<T> =>
      axios
        .delete<T>(
          `${uri}/${path}`,
          headers || headersOverride ? { headers: { ...headers, ...headersOverride } } : undefined,
        )
        .then((response: AxiosResponse<T>) => response.data),
  };

  next();
};
