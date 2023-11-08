if (!import.meta.env.VITE_COGNITO_CLIENT_ID) {
  throw new Error('VITE_COGNITO_CLIENT_ID is not defined')
}

export const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID

if (!import.meta.env.VITE_COGNITO_POOL_ID) {
  throw new Error('VITE_COGNITO_POOL_ID is not defined')
}

export const poolId = import.meta.env.VITE_COGNITO_POOL_ID
