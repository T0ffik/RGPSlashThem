import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useActor} from '@xstate/react';
import {View, Text, Button} from 'react-native';
import {useContext} from 'react';
import {BackgroundImage, GlobalStateContext} from 'Components/molecules';
import {useTranslation} from 'react-i18next';

export const Profile = () => {
  const {t, i18n} = useTranslation();
  const globalServices = useContext(GlobalStateContext);
  //@ts-ignore
  const [state, send] = useActor(globalServices.userService);
  const currentUser = auth().currentUser;
  const deleteUser = () => {
    firestore()
      .collection('Users')
      .doc(currentUser?.uid)
      .delete()
      .then(() => {
        currentUser?.delete();
      })
      .catch(err => alert(`coś się wyjebało: ${err.message}`));
  };
  console.log(i18n.languages);
  console.log(i18n.language);
  console.log(i18n.store);
  return (
    <BackgroundImage>
      <Text>{t('Profile')}</Text>
      <Text>id:{state.context.id}</Text>
      <Text>login:{state.context.login}</Text>
      <Text>mail:{state.context.mail}</Text>
      <Button
        title="log out"
        onPress={() => {
          //TODO work in progress, add for dummy component
          send('DeleteUser');
          auth().signOut();
        }}
      />
      <Button
        title="usuń się"
        onPress={() => {
          //TODO work in progress, add for dummy component
          send('DeleteUser');
          deleteUser();
        }}
      />
      <Button title={'pl'} onPress={() => i18n.changeLanguage('pl')} />
      <Button title={'en'} onPress={() => i18n.changeLanguage('en')} />
    </BackgroundImage>
  );
};
