import {Text, View} from 'react-native';
import Logo from '../../../static/imgs/rst_logo.svg';
import {styles} from './style';
import {BackArrow, LoginForm, Main, RegisterForm} from '../../../components';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../../utils/globalStyles';
import {useState} from 'react';
import {ROUTES, RootStackParamList} from '../../../static/types/routeTypes';
import {StackNavigationProp} from '@react-navigation/stack';

const Tab = createNativeStackNavigator();

export const MainPage = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.main}>
      {index !== 0 && <BackArrow goBack={() => navigation.navigate(ROUTES.MAIN)} />}
      <Logo width={340} height={75} />
      <Text style={styles.logoSubText}>Dla ludzi i innych stworów</Text>
      <View style={globalStyles.navigationWrapper}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name={ROUTES.MAIN}>{() => <Main setIndex={setIndex} />}</Tab.Screen>
          <Tab.Screen name={ROUTES.LOGIN}>
            {() => <LoginForm setIndex={setIndex} />}
          </Tab.Screen>
          <Tab.Screen name={ROUTES.REGISTER}>
            {() => <RegisterForm setIndex={setIndex} />}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </View>
  );
};
