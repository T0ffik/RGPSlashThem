import {createContext} from 'react';
import {useInterpret} from '@xstate/react';
import {userMachine} from '../../../xstate/User/userMachine';
import {ViewProps} from 'react-native';

export const GlobalStateContext = createContext({});

export const GlobalStateProvider = ({children}: ViewProps) => {
  const userService = useInterpret(userMachine);

  return (
    <GlobalStateContext.Provider value={{userService}}>
      {children}
    </GlobalStateContext.Provider>
  );
};
