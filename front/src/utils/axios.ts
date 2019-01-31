import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Response<T> extends AxiosResponse<T> {
  metadata?: any;
}
