import {Text, View} from 'react-native';
import Logo from '../../../static/imgs/rst_logo.svg';
import {styles} from './style';
import {useState} from 'react';
import {BackArrow, Login, Main, Register} from '../../../components';
import auth from '@react-native-firebase/auth';

export const MainPage = () => {
  const [view, setView] = useState<'login' | 'main' | 'register'>('main');
  const goBack = () => {
    setView('main');
    auth()
      .signOut()
      .then(() => alert('wylogowano'));
  };
  const renderView = () => {
    switch (view) {
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      case 'main':
      default:
        return (
          <Main
            pressLogin={() => setView('login')}
            pressRegister={() => setView('register')}
          />
        );
    }
  };
  return (
    <View style={styles.main}>
      {view !== 'main' && <BackArrow goBack={goBack} />}
      <Logo width={340} height={75} />
      <Text style={styles.logoSubText}>Dla ludzi i innych stworów</Text>
      {renderView()}
    </View>
  );
};
