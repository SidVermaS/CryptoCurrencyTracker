import { AxiosError, AxiosRequestConfig } from 'axios';
import {
  ApiResponseI,
  ConfigParamsI,
  DeleteParamsI,
  GetParamsI,
  PatchParamsI,
  PostParamsI,
} from '../../types/services/api';
import api from './apiConfig';

const _generatePath = (
  url: string,
  pathParams?: Record<string, unknown> | undefined,
): string => {
  if (pathParams && Object.keys(pathParams)?.length) {
    Object.keys(pathParams).reduce((acc, key) => {
      if (pathParams?.[key]) {
        acc = acc.replaceAll(`:${key}`, `${pathParams[key]}`);
      }
      return acc;
    }, url);
  }
  return url;
};
const _generateConfig = (
  configParams?: ConfigParamsI | undefined,
): AxiosRequestConfig | undefined => {
  const config: AxiosRequestConfig = {};
  if (
    configParams?.queryParams &&
    Object.keys(configParams?.queryParams)?.length
  ) {
    config.params = configParams.queryParams;
  }
  if (configParams?.payload && Object.keys(configParams?.payload)?.length) {
    config.data = configParams.payload;
  }
  return config;
};
export const get = async (params: GetParamsI): Promise<ApiResponseI> => {
  try {
    const response = await api.get(
      _generatePath(params.url),
      _generateConfig(params),
    );
    const { status, data } = response;
    return { status, data, error: null };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        status: error.response?.status,
        data: error.response?.data,
        error,
      };
    }
    return { error };
  }
};
export const post = async (params: PostParamsI): Promise<ApiResponseI> => {
  try {
    const response = await api.post(
      _generatePath(params.url),
      _generateConfig(params),
    );
    const { status, data } = response;
    return { status, data, error: null };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        status: error.response?.status,
        data: error.response?.data,
        error,
      };
    }
    return { error };
  }
};
export const patch = async (params: PatchParamsI): Promise<ApiResponseI> => {
  try {
    const response = await api.patch(
      _generatePath(params.url),
      _generateConfig(params),
    );
    const { status, data } = response;
    return { status, data, error: null };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        status: error.response?.status,
        data: error.response?.data,
        error,
      };
    }
    return { error };
  }
};
export const put = async (params: PatchParamsI): Promise<ApiResponseI> => {
  try {
    const response = await api.put(
      _generatePath(params.url),
      _generateConfig(params),
    );
    const { status, data } = response;
    return { status, data, error: null };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        status: error.response?.status,
        data: error.response?.data,
        error,
      };
    }
    return { error };
  }
};
export const deleteMethod = async (
  params: DeleteParamsI,
): Promise<ApiResponseI> => {
  try {
    const response = await api.delete(_generatePath(params.url));
    const { status, data } = response;
    return { status, data, error: null };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        status: error.response?.status,
        data: error.response?.data,
        error,
      };
    }
    return { error };
  }
};
