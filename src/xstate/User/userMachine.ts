import {createMachine, assign} from 'xstate';
import {TUser} from './types';

type TLoginValues = {
  email: string;
  password: string;
};

export const userMachine = createMachine(
  {
    tsTypes: {} as import('./userMachine.typegen').Typegen0,
    id: 'User Machine',
    initial: 'No user',
    schema: {
      services: {} as {
        loadUser: {
          data: TUser;
        };
      },
      events: {} as {type: 'Load'; value: TLoginValues},
    },
    context: {
      user: {} as TUser,
      errorMessage: undefined as string | undefined,
    },
    states: {
      'Loading User': {
        invoke: {
          src: 'loadUser',
          onDone: [
            {
              target: 'User Loaded',
              actions: 'assignUserToContext',
            },
          ],
          onError: [{target: 'User loading error'}],
        },
      },
      'User Loaded': {},
      'User loading error': {},
      'No user': {
        on: {
          Load: {
            target: 'Loading User',
          },
        },
      },
    },
  },
  {
    actions: {
      assignUserToContext: assign((context, event) => {
        return {
          user: event.data,
        };
      }),
    },
  },
);
