import {
  CognitoUser,
  IAuthenticationCallback
} from 'amazon-cognito-identity-js'
import { cognitoUserPool } from './user-pool'

export const forgotPassword = async (
  email: string,
  callbacks: IAuthenticationCallback
) => {
  const user = new CognitoUser({ Username: email, Pool: cognitoUserPool })

  return user.forgotPassword(callbacks)
}
