import {Text, View} from 'react-native';
import Logo from '../../../static/imgs/rst_logo.svg';
import {styles} from './style';
import {BackArrow, LoginForm} from '../..';

// @ts-ignore
export const LoginView = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.main}>
      <BackArrow goBack={goBack} />
      <Logo width={340} height={75} />
      <Text style={styles.logoSubText}>Dla ludzi i innych stworów</Text>
      <LoginForm />
    </View>
  );
};
