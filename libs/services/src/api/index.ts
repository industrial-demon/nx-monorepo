import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { insertIdToken, insertRefreshToken } from './interceptors'

export class ApiService {
  private readonly axiosInstance: AxiosInstance

  private setupRequestInterceptor = () => {
    this.axiosInstance.interceptors.request.use(insertIdToken, (error) =>
      Promise.reject(error)
    )
  }

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    this.setupRequestInterceptor()
  }

  get = async <TData>(path: string, options?: AxiosRequestConfig) =>
    await this.axiosInstance.get<TData>(path, options)

  post = async <TData>(path: string, options?: AxiosRequestConfig) =>
    await this.axiosInstance.post<TData>(path, options?.data, options)

  patch = async <TData>(path: string, options?: AxiosRequestConfig) =>
    await this.axiosInstance.patch<TData>(path, options?.data, options)

  put = async <TData>(path: string, options?: AxiosRequestConfig) =>
    await this.axiosInstance.put<TData>(path, options?.data, options)

  del = async <TData>(path: string, options?: AxiosRequestConfig) =>
    await this.axiosInstance.delete<TData>(path, options)

  setupInterceptors = ({
    onRefreshUpdate,
    onRefreshFail
  }: {
    onRefreshUpdate?: (tokens: any) => void
    onRefreshFail?: () => void
  }) => {
    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response
      },
      insertRefreshToken({
        api: this,
        onRefreshUpdate,
        onRefreshFail
      })
    )
  }
}
