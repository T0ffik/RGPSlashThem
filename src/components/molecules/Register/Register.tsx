import {View} from 'react-native';
import {CustomButton, Input, PasswordInput} from '../../../components';
import {useState} from 'react';

export const Register = () => {
  const [login, setLogin] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Input value={login} onChange={setLogin} />
      <Input value={mail} onChange={setMail} additionalStyles={{marginVertical: 20}} />
      <PasswordInput
        value={password}
        onChange={setPassword}
        additionalStyles={{marginBottom: 20}}
      />
      <CustomButton onPress={() => alert('zarejestrowałeś się')} title="Zarejestruj" />
    </View>
  );
};
