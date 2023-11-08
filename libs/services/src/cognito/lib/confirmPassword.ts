import { CognitoUser } from 'amazon-cognito-identity-js'
import { cognitoUserPool } from './user-pool'

export const confirmPassword = (
  email: string,
  newPassword: string,
  callbacks: {
    onSuccess: (success: string) => void
    onFailure: (err: Error) => void
  }
) => {
  const user = new CognitoUser({ Username: email, Pool: cognitoUserPool })

  return user.confirmPassword(email, newPassword, callbacks)
}
