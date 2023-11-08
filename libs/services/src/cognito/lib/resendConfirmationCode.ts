import { CognitoUser } from 'amazon-cognito-identity-js'
import { cognitoUserPool } from './user-pool'

export const resendConfirmationCode = async (
  email: string,
  callback: (error?: Error, result?: unknown) => void
) => {
  const user = new CognitoUser({ Username: email, Pool: cognitoUserPool })

  return user.resendConfirmationCode(callback)
}
