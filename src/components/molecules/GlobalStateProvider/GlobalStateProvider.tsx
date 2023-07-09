import {createContext} from 'react';
import {useInterpret} from '@xstate/react';
import {userMachine} from 'Xstate/User/userMachine';
import {ViewProps} from 'react-native';
import {BaseActionObject, Interpreter, ResolveTypegenMeta, ServiceMap} from 'xstate';
import {Typegen0} from '../../../xstate/User/userMachine.typegen';

type TGlobalContext = {
  userService: Interpreter<
    {
      login: string;
      mail: string;
      id: string;
    },
    any,
    | {
        type: 'Load';
        value: {
          id: string;
        };
      }
    | {
        type: 'DeleteUser';
      },
    {
      value: any;
      context: {
        login: string;
        mail: string;
        id: string;
      };
    },
    ResolveTypegenMeta<
      Typegen0,
      | {
          type: 'Load';
          value: {
            id: string;
          };
        }
      | {
          type: 'DeleteUser';
        },
      BaseActionObject,
      ServiceMap
    >
  >;
};
export const GlobalStateContext = createContext<TGlobalContext>({
  userService: new Interpreter(userMachine),
});

export const GlobalStateProvider = ({children}: ViewProps) => {
  const userService = useInterpret(userMachine);

  return (
    <GlobalStateContext.Provider value={{userService}}>
      {children}
    </GlobalStateContext.Provider>
  );
};
