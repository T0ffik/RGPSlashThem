import {Text, View} from 'react-native';
import Logo from '../../../static/imgs/rst_logo.svg';
import {styles} from './style';
import {useState} from 'react';
import {BackArrow, Login, Main, Register} from '../../../components';

export const MainPage = () => {
  const [view, setView] = useState<'login' | 'main' | 'register'>('main');
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
      {view !== 'main' && <BackArrow goBack={() => setView('main')} />}
      <Logo width={340} height={75} />
      <Text style={styles.logoSubText}>Dla ludzi i innych stworów</Text>
      {renderView()}
    </View>
  );
};
