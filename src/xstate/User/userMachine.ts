import {createMachine, assign} from 'xstate';
import {getUserData} from '../../api/auth/getUserData';

export const userMachine = createMachine({
  id: 'User',
  tsTypes: {} as import('./userMachine.typegen').Typegen0,
  context: {login: '', mail: '', id: ''},
  initial: 'noUser',
  schema: {
    events: {} as {type: 'Load'; value: {id: string}} | {type: 'DeleteUser'},
  },
  states: {
    noUser: {
      on: {
        Load: {
          target: 'gettingUser',
          actions: assign((context, event) => {
            return {id: event.value.id};
          }),
        },
      },
    },
    gettingUser: {
      invoke: {
        src: getUserData,
        onDone: {
          target: 'userLoaded',
          actions: assign((context, event) => {
            return {
              ...event.data,
            };
          }),
        },
      },
    },
    userLoaded: {
      on: {
        DeleteUser: {
          target: 'noUser',
          actions: assign((context, event) => {
            return {id: '', login: '', mail: ''};
          }),
        },
      },
    },
  },
});
