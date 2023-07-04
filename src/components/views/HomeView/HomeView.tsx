import {useActor} from '@xstate/react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useContext, useEffect} from 'react';
import {GlobalStateContext} from '../../../components/molecules';

export const HomeView = () => {
  const globalServices = useContext(GlobalStateContext);
  //@ts-ignore
  const [, send] = useActor(globalServices.userService);
  const id = auth().currentUser?.uid as string;
  useEffect(() => {
    send({type: 'Load', value: {id}});
  }, []);
  return (
    <View>
      <Text>HomeView</Text>
    </View>
  );
};
