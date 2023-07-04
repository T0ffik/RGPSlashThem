// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    'done.invoke.User Machine.Loading User:invocation[0]': {
      type: 'done.invoke.User Machine.Loading User:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.init': {type: 'xstate.init'};
  };
  invokeSrcNameMap: {
    loadUser: 'done.invoke.User Machine.Loading User:invocation[0]';
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: 'loadUser';
  };
  eventsCausingActions: {
    assignUserToContext: 'done.invoke.User Machine.Loading User:invocation[0]';
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    loadUser: 'Load';
  };
  matchesStates: 'Loading User' | 'No user' | 'User Loaded' | 'User loading error';
  tags: never;
}
