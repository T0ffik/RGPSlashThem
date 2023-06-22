import {View} from 'react-native';
import {CustomButton, Input, PasswordInput} from '../../../components';
import {useState} from 'react';
import {onRegister} from '../../../api';

export const Register = () => {
  const [login, setLogin] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Input value={login} onChange={setLogin} placeholder="Login" />
      <Input
        value={mail}
        onChange={setMail}
        placeholder="E-mail"
        additionalStyles={{marginVertical: 20}}
      />
      <PasswordInput
        value={password}
        onChange={setPassword}
        additionalStyles={{marginBottom: 20}}
      />
      <CustomButton
        onPress={() => onRegister({login: mail, password})}
        title="Zarejestruj"
      />
    </View>
  );
};
