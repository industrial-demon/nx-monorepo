/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COGNITO_CLIENT_ID: string | undefined
  readonly VITE_COGNITO_POOL_ID: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
