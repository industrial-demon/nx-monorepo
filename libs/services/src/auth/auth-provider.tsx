import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react'

import { LoginResp, useLocalStorage, User } from './useLocalStorage'

type AuthContextValue = {
  user: User
  login: (tokens: LoginResp) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setTokens, removeTokens] = useLocalStorage({
    defaultValue: null,
  })

  const login = useCallback(
    (tokens: LoginResp) => {
      setTokens(tokens)
    },
    [setTokens],
  )

  const logout = useCallback(() => {
    removeTokens()
  }, [removeTokens])

  const contextValue = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [login, logout, user],
  )

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error(
      'useCurrentUser has to be used within <AuthContext.Provider>',
    )
  }

  return authContext
}
