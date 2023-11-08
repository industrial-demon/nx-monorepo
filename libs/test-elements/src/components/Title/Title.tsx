import { FunctionComponent, PropsWithChildren } from 'react';

export const Title: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="text-4xl font-bold">{children}</div>;
};
