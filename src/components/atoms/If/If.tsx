import {ReactNode} from 'react';

export const If = ({children, condition}: {children: ReactNode; condition: unknown}) => {
  return Boolean(condition) ? children : null;
};
