import React from 'react';
import {CustomButton} from '../../atoms';

type TMainProps = {
  pressLogin: () => void;
  pressRegister: () => void;
};

export const Main = ({pressLogin, pressRegister}: TMainProps) => {
  return (
    <>
      <CustomButton title="Logowanie" onPress={pressLogin} />
      <CustomButton title="Rejestracja" onPress={pressRegister} />
    </>
  );
};
