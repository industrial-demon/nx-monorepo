export enum TokenTypeEnum {
  ID_TOKEN = 'idToken',
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}

export type TokenType = TokenTypeEnum
export type TokensResp = Record<TokenType, string>

const getToken = (type: TokenType) => () => localStorage.getItem(type) ?? ''

export const getIdToken = getToken(TokenTypeEnum.ID_TOKEN)
export const getAccessToken = getToken(TokenTypeEnum.ACCESS_TOKEN)
export const getRefreshToken = getToken(TokenTypeEnum.REFRESH_TOKEN)

export const setToken =
  (type: TokenType) =>
  (token: string): void => {
    localStorage.setItem(type, token)
  }

export const setIdToken = setToken(TokenTypeEnum.ID_TOKEN)
export const setAccessToken = setToken(TokenTypeEnum.ACCESS_TOKEN)
export const setRefreshToken = setToken(TokenTypeEnum.REFRESH_TOKEN)

const removeToken = (token: TokenTypeEnum) => () => {
  localStorage.removeItem(token)
}

export const removeIdToken = removeToken(TokenTypeEnum.ID_TOKEN)
export const removeAccessToken = removeToken(TokenTypeEnum.ACCESS_TOKEN)
export const removeRefreshToken = removeToken(TokenTypeEnum.REFRESH_TOKEN)
