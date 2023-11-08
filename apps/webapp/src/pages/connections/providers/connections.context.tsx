import { ReactNode, createContext, useContext } from 'react'

import {
  IoCConnectionsContainer,
  ConnectionsStore,
} from '../model/connections.store'

const ConnectionsCotext = createContext<ConnectionsStore | null>(null)

const ConnectionsContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConnectionsCotext.Provider
      value={IoCConnectionsContainer.resolve(ConnectionsStore)}
    >
      {children}
    </ConnectionsCotext.Provider>
  )
}

const useConnectionsStore = () => {
  const store = useContext(ConnectionsCotext)
  if (store === null) {
    throw new Error(
      'You have forgotten to wrap your root component with RootStoreProvider',
    )
  }
  return store
}

export { ConnectionsContextProvider, useConnectionsStore }
