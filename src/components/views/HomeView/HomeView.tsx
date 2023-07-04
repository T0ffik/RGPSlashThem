import {firebase} from '@react-native-firebase/auth';
import {View, Text, Button} from 'react-native';

export const HomeView = () => {
  return (
    <View>
      <Text>HomeView</Text>
      <Button title="log out" onPress={() => firebase.auth().signOut()} />
    </View>
  );
};
