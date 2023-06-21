import {Text, View} from 'react-native';
import {CustomButton, Input, PasswordInput} from '../../../components';
import {useState} from 'react';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Input value={login} onChange={setLogin} />
      <PasswordInput
        value={password}
        onChange={setPassword}
        additionalStyles={{marginTop: 20, marginBottom: 20}}
      />
      <CustomButton title="Zaloguj" onPress={() => alert('zalogowałeś się zjebie')} />
    </View>
  );
};
