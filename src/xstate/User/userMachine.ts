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

// type TLoginValues = {
//   email: string;
//   password: string;
// };

// export const userMachine = createMachine(
//   {
//     tsTypes: {} as import('./userMachine.typegen').Typegen0,
//     id: 'User Machine',
//     initial: 'No user',
//     schema: {
//       services: {} as {
//         loadUser: {
//           data: TUser;
//         };
//       },
//       events: {} as {type: 'Load'; value: TLoginValues},
//     },
//     context: {
//       user: {} as TUser,
//       errorMessage: undefined as string | undefined,
//     },
//     states: {
//       'Loading User': {
//         invoke: {
//           src: 'loadUser',
//           onDone: [
//             {
//               target: 'User Loaded',
//               actions: 'assignUserToContext',
//             },
//           ],
//           onError: [{target: 'User loading error'}],
//         },
//       },
//       'User Loaded': {},
//       'User loading error': {},
//       'No user': {
//         on: {
//           Load: {
//             target: 'Loading User',
//           },
//         },
//       },
//     },
//   },
//   {
//     actions: {
//       assignUserToContext: assign((context, event) => {
//         return {
//           user: event.data,
//         };
//       }),
//     },
//   },
// );
