import { ApiService } from '.'

type RefreshTokenReq = {
  refreshToken: string
}

type RefreshTokenResp = any

export const postRefreshToken = (api: ApiService, refreshToken: string) => {
  return api
    .post<RefreshTokenReq>('auth/v1/employees/refreshToken', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: { refreshToken }
    })
    .then((data) => data.data)
    .catch(() => {
      throw new Error('Err')
    }) as Promise<RefreshTokenResp>
}
