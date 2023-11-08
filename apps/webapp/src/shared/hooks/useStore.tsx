import { useContext } from "react";

export const useStore = <T extends keyof RootStore>(storeName: T): RootStore[T] => {
  const rootStore = useContext(RootContext);
  if (rootStore === null) {
    throw new Error('You have forgotten to wrap your root component with RootStoreProvider');
  }

  return rootStore[storeName];
};
