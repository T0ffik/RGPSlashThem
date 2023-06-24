import {Text, View} from 'react-native';
import Logo from '../../../static/imgs/rst_logo.svg';
import {styles} from './style';
import {Main} from '../../../components';
// @ts-ignore
export const MainPage = ({navigation}) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };
  const goToRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={styles.main}>
      <Logo width={340} height={75} />
      <Text style={styles.logoSubText}>Dla ludzi i innych stworów</Text>
      <Main pressLogin={goToLogin} pressRegister={goToRegister} />
    </View>
  );
};
