import {View} from 'react-native';
import {CustomButton, Input, PasswordInput} from '../../../components';
import {useState} from 'react';
import {onLogin} from '../../../api';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Input value={login} onChange={setLogin} placeholder="Login" />
      <PasswordInput
        value={password}
        onChange={setPassword}
        additionalStyles={{marginTop: 20, marginBottom: 20}}
      />
      <CustomButton title="Zaloguj" onPress={() => onLogin({login, password})} />
    </View>
  );
};
