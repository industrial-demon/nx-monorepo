import { ReactNode, createContext, useContext } from 'react'
import { DashboardStore, IoContainerPage } from './model/dashboard.store'

const DashboardContext = createContext<DashboardStore | null>(null)

const DashboardContextProvider = ({ children }: { children: ReactNode }) => {

  return (
    <DashboardContext.Provider value={IoContainerPage.resolve(DashboardStore)}>
      {children}
    </DashboardContext.Provider>
  )
}

const useDashboardStore = () => {
  const store = useContext(DashboardContext)
  if (store === null) {
    throw new Error(
      'You have forgotten to wrap your root component with RootStoreProvider',
    )
  }
  return store
}

export { DashboardContextProvider, useDashboardStore }
