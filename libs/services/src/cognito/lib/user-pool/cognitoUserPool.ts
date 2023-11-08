import { CognitoUserPool } from 'amazon-cognito-identity-js'
import { clientId, poolId } from './cognito.public-config'

export const cognitoUserPool = new CognitoUserPool({
  UserPoolId: poolId,
  ClientId: clientId
})
