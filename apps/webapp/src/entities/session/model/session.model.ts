import { action, makeObservable, observable } from 'mobx'
import jwt_decode from 'jwt-decode'
import { Tokens } from '../../../shared/api/generated/auth'
import { UserEntity } from '../../../shared/api/generated/users'
import { axiosService } from '../../../shared/api'
import { redirect } from 'react-router-dom'

type AxiosService = typeof axiosService

export class SessionModel {
  user: UserEntity | null = null
  isLogin = false
  constructor(
    private readonly axiosService: AxiosService,
    onRefreshFail: (err: Error) => void,
  ) {
    makeObservable(
      this,
      {
        user: observable,
        isLogin: observable,
        onLogin: action.bound,
        onLogout: action.bound,
      },
      {},
    )
    this.axiosService.setupInterceptors({ onRefreshFail: this.onRefreshFail })
    const tkn = localStorage.getItem('access_token')
    if (tkn) {
      this.onLogin(tkn)
    }
  }

  onRefreshFail = () => {
    redirect('/sign-in')
    this.onLogout()
  }

  onLogin(token: Tokens['access_token'] | null) {
    if (token === null) {
      return
    }
    const jwtDecode = jwt_decode<{ user: UserEntity }>(token)
    this.user = jwtDecode.user
    this.isLogin = true
  }

  onLogout() {
    this.user = null
    this.isLogin = false
  }
}

export const sessionModel = new SessionModel(axiosService, () => {
  console.log('err')
})
