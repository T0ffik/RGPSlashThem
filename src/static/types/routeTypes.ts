import {Dispatch, SetStateAction} from 'react';

export enum ROUTES {
  WELCOME = 'Welcome',
  MAIN = 'Main',
  LOGIN = 'Login',
  REGISTER = 'Register',
  HOME = 'Home',
}

export type WelcomeStackParamList = {
  Main: {
    setIndex: Dispatch<SetStateAction<number>>;
  };
  Login: {
    setIndex: Dispatch<SetStateAction<number>>;
  };
  Register: {
    setIndex: Dispatch<SetStateAction<number>>;
  };
};

export type RootStackParamList = WelcomeStackParamList & {
  Welcome: undefined;
  Home: undefined;
};
