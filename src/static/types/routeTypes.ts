import {Dispatch, SetStateAction} from 'react';

export enum ROUTES {
  WELCOME = 'Welcome',
  MAIN = 'Main',
  LOGIN = 'Login',
  REGISTER = 'Register',
  HOME = 'Home',
  WIKI = 'Wiki',
  CALENDAR = 'Calendar',
  CARDS = 'Cards',
  PROFILE = 'Profile',
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

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Wiki: undefined;
  Calendar: undefined;
  Cards: undefined;
  Profile: undefined;
};
