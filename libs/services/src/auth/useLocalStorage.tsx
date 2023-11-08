import { useState } from 'react'
import jwt_decode from 'jwt-decode'
import {
  getIdToken,
  removeAccessToken,
  removeIdToken,
  removeRefreshToken,
  setAccessToken,
  setIdToken,
  setRefreshToken,
  TokenTypeEnum,
} from '../tokens'

export type Token = string

export type LoginResp = {
  [TokenTypeEnum.ID_TOKEN]: Token
  [TokenTypeEnum.ACCESS_TOKEN]: Token
  [TokenTypeEnum.REFRESH_TOKEN]: Token
}

export type User = {
  sub?: string
  'cognito:groups': string[]
  email_verified: boolean
  iss: string
  'cognito:username': string
  origin_jti: string
  aud: string
  event_id: string
  token_use: string
  auth_time: number
  exp: number
  iat: number
  jti: string
  email: string
} | null

type UseLocalStorage = {
  defaultValue: null
}

export const useLocalStorage = ({ defaultValue }: UseLocalStorage) => {
  const [user, setUser] = useState<User>(() => {
    try {
      const token = getIdToken()
      if (typeof token === 'string') {
        return jwt_decode(token)
      }
      return token
    } catch (err) {
      return defaultValue
    }
  })

  const setTokens = ({ idToken, accessToken, refreshToken }: LoginResp) => {
    try {
      setIdToken(idToken)
      setAccessToken(accessToken)
      if (refreshToken) {
        setRefreshToken(refreshToken)
      }
    } catch (err) {}
    setUser(jwt_decode(idToken))
  }

  const removeTokens = () => {
    try {
      removeIdToken()
      removeAccessToken()
      removeRefreshToken()
    } catch (err) {}
    setUser(null)
  }

  return [user, setTokens, removeTokens] as const
}
