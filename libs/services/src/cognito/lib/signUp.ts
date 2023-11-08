import { FieldValues } from 'react-hook-form'
import { cognitoUserPool } from './user-pool'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js'

const createAttributes = (userValues: FieldValues) => {
  return Object.keys(userValues).map(
    (key: string) =>
      new CognitoUserAttribute({
        Name: `custom:${key}`,
        Value: userValues[key]
      })
  )
}

export const signUp = async (
  email: string,
  password: string,
  userValues: FieldValues,
  callback: (error?: Error, result?: unknown) => void
) => {
  cognitoUserPool.signUp(
    email,
    password,
    createAttributes(userValues),
    [],
    callback
  )
}
