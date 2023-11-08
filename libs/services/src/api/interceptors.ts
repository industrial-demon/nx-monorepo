import { postRefreshToken } from './refresh-token'
import { getIdToken, getRefreshToken } from '../tokens'
import {
  AxiosError,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig
} from 'axios'
import { ApiService } from '.'

export const insertIdToken = (config: InternalAxiosRequestConfig) => {
  const idToken = getIdToken()
  if (idToken.length !== 0) {
    config.headers = {
      Authorization: `Bearer ${idToken}`,
      ...config.headers
    } as AxiosRequestHeaders
  }
  return config
}

let didTryRefresh = false

export const insertRefreshToken =
  ({
    api,
    onRefreshUpdate,
    onRefreshFail
  }: {
    api: ApiService,
    onRefreshUpdate?: (tokens: any) => void
    onRefreshFail?: () => void
  }) =>
  async (error: AxiosError) => {
    if (error.response?.status === 401 && !didTryRefresh) {
      const refreshToken = getRefreshToken()
      if (refreshToken.length !== 0) {
        try {
          const tokens = await postRefreshToken(api, refreshToken)
          onRefreshUpdate?.(tokens)
        } catch {
          onRefreshFail?.()
        } finally {
          didTryRefresh = true
        }
      }
    }
    return Promise.reject(error)
  }
