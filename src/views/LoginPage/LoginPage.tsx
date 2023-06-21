import {Text, View} from 'react-native';
import Logo from '../../static/imgs/rst_logo.svg';
import {CustomButton} from '../../components';
import {styles} from './style';

export const LoginPage = () => {
  return (
    <View style={styles.main}>
      <Logo width={340} height={75} />
      <Text style={styles.logoSubText}>Dla ludzi i innych stworów</Text>
      <CustomButton title="Logowanie" onPress={() => console.log('zaloguj się')} />
      <CustomButton title="Rejestracja" onPress={() => console.log('Zarejestruj się')} />
    </View>
  );
};
