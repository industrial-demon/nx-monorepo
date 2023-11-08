import {
  CognitoAccessToken,
  CognitoIdToken,
  CognitoRefreshToken
} from 'amazon-cognito-identity-js'
import { UserType } from './constants'

export type User = {
  accessToken: CognitoAccessToken
  clockDrift: number
  email: string
  email_verified: boolean
  firstName: string
  lastName: string
  phoneNumber: string
  phonePrefix: string
  type: UserType
  idToken: CognitoIdToken
  refreshToken: CognitoRefreshToken
  sub: string
}
