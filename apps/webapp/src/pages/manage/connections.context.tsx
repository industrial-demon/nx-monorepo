import { ReactNode, createContext, useContext } from 'react'
import { manageContainer, ManageStore } from './model/manage.store'

const ManageCotext = createContext<ManageStore | null>(null)

const ManageContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ManageCotext.Provider value={manageContainer.resolve(ManageStore)}>
      {children}
    </ManageCotext.Provider>
  )
}

const useManageStore = () => {
  const store = useContext(ManageCotext)
  if (store === null) {
    throw new Error(
      'You have forgotten to wrap your root component with RootStoreProvider',
    )
  }
  return store
}

export { ManageContextProvider, useManageStore }
