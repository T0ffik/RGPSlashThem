import {useActor} from '@xstate/react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useContext, useEffect} from 'react';
import {GlobalStateContext} from 'Components/molecules';

export const HomeView = () => {
  const globalServices = useContext(GlobalStateContext);
  //@ts-ignore
  const [_, send] = useActor(globalServices.userService);
  const id = auth().currentUser?.uid;
  useEffect(() => {
    if (id) {
      send({type: 'Load', value: {id}});
    }
  }, []);
  return (
    <View>
      <Text>HomeView</Text>
    </View>
  );
};
