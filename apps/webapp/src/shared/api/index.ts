import { UsersApi } from './generated/users'
import { ConnectionsApi } from './generated/connectors'
import { AuthApi } from './generated/auth'
import axios, { AxiosInstance } from 'axios'

const BASE_PATH = `http://localhost:4002`

class LocalStorageService {
  setItem = (key: string, value: string) => {
    localStorage.setItem(key, value)
  }

  getItem = (key: string) => {
    return localStorage.getItem(key)
  }

  setTokens = (accessToken: string, refreshToken: string) => {
    console.log('tokkens', accessToken)
    this.setItem('access_token', accessToken)
    this.setItem('refresh_token', refreshToken)
  }
}

class AxiosService {
  isTryRefresh = false
  axiosInst: AxiosInstance = axios.create({
    baseURL: BASE_PATH,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  constructor(readonly localStorageService: LocalStorageService) {
    this.setAthBearer()
  }

  setAthBearer() {
    this.axiosInst.defaults.headers.Authorization = `Bearer ${this.localStorageService.getItem(
      'access_token',
    )}`
  }

  setupInterceptors({ onRefreshFail }: { onRefreshFail: () => void }) {
    this.axiosInst.interceptors.response.use(
      reponse => reponse,
      async error => {
        const originalConfig = error.config

        if (error.response) {
          if (error.response.status === 401 && !this.isTryRefresh) {
            this.isTryRefresh = true
            console.log(error)
            try {
              const refreshToken =
                this.localStorageService.getItem('refresh_token')
              const response = await axios.post(
                BASE_PATH + '/api/auth/refresh-tokens',
                {},
                {
                  headers: {
                    Authorization: `Bearer ${refreshToken}`,
                  },
                },
              )

              this.localStorageService.setTokens(
                response.data.access_token,
                response.data.refresh_token,
              )

              this.setAthBearer()
              return this.axiosInst(originalConfig)
            } catch (_error: unknown) {
              localStorage.removeItem('access_token')
              localStorage.removeItem('refresh_token')
              onRefreshFail?.()
              return Promise.reject(_error)
            }
            finally {
              this.isTryRefresh = false
            }
          }
        }

        return Promise.reject(error)
      },
    )

    this.axiosInst.interceptors.request.use(
      config => {
        const asccessToken = this.localStorageService.getItem('access_token')
        if (asccessToken) {
          config.headers['Authorization'] = `Bearer ${asccessToken}`
        }
        return config
      },

      error => {
        return Promise.reject(error)
      },
    )
  }

  get instance() {
    return this.axiosInst
  }
}

export const axiosService = new AxiosService(new LocalStorageService())

export const users = new UsersApi(undefined, BASE_PATH)
export const connectors = {
  connections: new ConnectionsApi(undefined, BASE_PATH, axiosService.instance),
}

export const auth = new AuthApi(undefined, BASE_PATH)
