import React, { FC, useContext, ReactNode } from "react";

export type IContext = Storage | undefined;

const Context = React.createContext<IContext>(undefined);

const { Provider } = Context;

export type ProviderRenderProp = (ctx: IContext) => ReactNode;

export const StorageProvider: FC<{ storage?: Storage; children: ReactNode }> = ({ storage, children }) => {
  return <Provider value={storage}>{children}</Provider>;
};

export const useStorage = (): Storage => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("StorageProvider context is missing");
  }

  return context;
};

export default Context;
