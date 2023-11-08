import { CognitoUserSession } from 'amazon-cognito-identity-js'
import { cognitoUserPool } from './user-pool'
import { User } from './types'

export const getUser = async (): Promise<User> => {
  return await new Promise((resolve, reject) => {
    const user = cognitoUserPool.getCurrentUser()
    if (user) {
      user.getSession(
        async (err: Error | null, session: CognitoUserSession | null) => {
          if (err) {
            reject()
          } else {
            const result: Record<string, unknown> = {}
            await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) {
                  reject(err)
                } else if (attributes) {
                  for (let attribute of attributes) {
                    const { Name, Value } = attribute
                    result[Name.replace('custom:', '')] = Value
                  }
                  resolve(result)
                }
              })
            })
            resolve({ ...session, ...result } as User)
          }
        }
      )
    } else {
      reject()
    }
  })
}
