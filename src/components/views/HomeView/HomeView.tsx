import {useActor} from '@xstate/react';
import auth from '@react-native-firebase/auth';
import {useContext, useEffect} from 'react';
import {BackgroundImage, GlobalStateContext, Menu} from 'Components/molecules';
import {CampainTile, ScreenTitle} from '../../atoms';
import {useTranslation} from 'react-i18next';

export const HomeView = () => {
  const globalServices = useContext(GlobalStateContext);
  const {t} = useTranslation();
  //@ts-ignore
  const [_, send] = useActor(globalServices.userService);
  const id = auth().currentUser?.uid;
  useEffect(() => {
    send({type: 'Load', value: {id}});
  }, []);
  return (
    <BackgroundImage>
      <ScreenTitle>{t('Campains')}</ScreenTitle>
      <CampainTile />
      <Menu />
    </BackgroundImage>
  );
};
