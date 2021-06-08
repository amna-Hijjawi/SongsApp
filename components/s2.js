import React, { FC, createContext, ReactNode, ReactElement } from 'react';
import { RootStoreModel } from './store';

export const StoreContext = createContext<RootStoreModel>( RootStoreModel)

export type StoreComponent = FC<{
  store: RootStoreModel;
  children: ReactNode;
}>;

export const StoreProvider: StoreComponent = ({
  children,
  store
}): ReactElement => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}