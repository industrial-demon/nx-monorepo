import { CognitoUser } from 'amazon-cognito-identity-js'
import { cognitoUserPool } from './user-pool'

export const confirmRegistration = async (
  email: string,
  otp: string,
  callback: (error?: Error, result?: unknown) => void
) => {
  const user = new CognitoUser({ Username: email, Pool: cognitoUserPool })

  return user.confirmRegistration(otp, true, callback)
}
