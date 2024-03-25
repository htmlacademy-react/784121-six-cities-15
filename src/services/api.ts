import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';

const enum Default {
  BaseURL = 'https://15.design.htmlacademy.pro/six-cities',
  Timeout = 5000,
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response: AxiosResponse) =>
  !!StatusCodeMapping[response.status];

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: Default.BaseURL as string,
    timeout: Default.Timeout as number,
  });
  toast('hello', { position: 'top-right' });
  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast(error.response.data.error);
      }

      throw error;
    }
  );

  return api;
};
