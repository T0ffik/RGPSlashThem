import {Text, View} from 'react-native';
import {Input} from '../../../components';
import {useState} from 'react';

export const Login = () => {
  const [login, setLogin] = useState('');
  return (
    <View>
      <Input value={login} onChange={setLogin} />
    </View>
  );
};
