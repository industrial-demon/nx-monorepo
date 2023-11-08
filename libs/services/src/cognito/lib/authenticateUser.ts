import {
  CognitoUser,
  AuthenticationDetails,
  IAuthenticationCallback
} from 'amazon-cognito-identity-js'
import { cognitoUserPool } from './user-pool'

export const authenticateUser = async (
  email: string,
  password: string,
  callbacks: IAuthenticationCallback
) => {
  const user = new CognitoUser({ Username: email, Pool: cognitoUserPool })

  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password
  })

  return user.authenticateUser(authenticationDetails, callbacks)
}
