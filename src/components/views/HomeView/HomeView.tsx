import {useActor} from '@xstate/react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useContext, useEffect} from 'react';
import {BackgroundImage, GlobalStateContext, Menu} from 'Components/molecules';
import {CampainTile, ScreenTitle} from '../../atoms';

export const HomeView = () => {
  const globalServices = useContext(GlobalStateContext);
  //@ts-ignore
  const [_, send] = useActor(globalServices.userService);
  const id = auth().currentUser?.uid as string;
  useEffect(() => {
    send({type: 'Load', value: {id}});
  }, []);
  return (
    <BackgroundImage>
      <ScreenTitle>Kampanie</ScreenTitle>
      <CampainTile />
      <Menu />
    </BackgroundImage>
  );
};
