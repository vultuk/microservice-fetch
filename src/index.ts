import axios, { AxiosResponse } from 'axios';
import { NextFunction, Request, Response } from 'express';

import fetch from './Types/Fetch';

export * from './Types';
export const Fetch = fetch;

declare global {
  namespace Express {
    interface Request {
      fetch: fetch;
    }
  }
}

export default () => (req: Request, res: Response, next: NextFunction) => {
  req.fetch = {
    get: <T = any>(uri: string, headers: any[] = []) => (path: string = '', headersOverride: any[] = []): Promise<T> =>
      axios.get<T>(`${uri}/${path}`).then((response: AxiosResponse<T>) => response.data),
    post: <T = any, D = any>(uri: string, headers: any[] = []) => (
      data: D,
      path: string = '',
      headersOverride: any[] = [],
    ): Promise<T> => axios.post<T>(`${uri}/${path}`, data).then((response: AxiosResponse<T>) => response.data),
    patch: <T = any, D = any>(uri: string, headers: any[] = []) => (
      data: D,
      path: string = '',
      headersOverride: any[] = [],
    ): Promise<T> => axios.patch<T>(`${uri}/${path}`, data).then((response: AxiosResponse<T>) => response.data),
    put: <T = any, D = any>(uri: string, headers: any[] = []) => (
      data: D,
      path: string = '',
      headersOverride: any[] = [],
    ): Promise<T> => axios.put<T>(`${uri}/${path}`, data).then((response: AxiosResponse<T>) => response.data),
    delete: <T = any>(uri: string, headers: any[] = []) => (
      path: string = '',
      headersOverride: any[] = [],
    ): Promise<T> => axios.delete<T>(`${uri}/${path}`).then((response: AxiosResponse<T>) => response.data),
  };

  next();
};