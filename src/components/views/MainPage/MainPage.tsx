import {Text, View} from 'react-native';
import Logo from '../../../static/imgs/rst_logo.svg';
import {styles} from './style';
import {useState} from 'react';
import {CustomButton, Main} from '../../../components';

export const MainPage = () => {
  const [view, setView] = useState<'login' | 'main' | 'register'>('main');
  const renderView = () => {
    switch (view) {
      case 'login':
        return (
          <>
            <Text>Logowanie</Text>
            <CustomButton title="Goback" onPress={() => setView('main')} />
          </>
        );
      case 'register':
        return (
          <>
            <Text>rejestracja</Text>
            <CustomButton title="Goback" onPress={() => setView('main')} />
          </>
        );
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
      <Logo width={340} height={75} />
      <Text style={styles.logoSubText}>Dla ludzi i innych stworów</Text>
      {renderView()}
    </View>
  );
};
