import {Text, View} from 'react-native';
import Logo from '../../../static/imgs/rst_logo.svg';
import {styles} from './style';
import {BackArrow, LoginForm, Main, RegisterForm} from '../../../components';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../../utils/globalStyles';
import {useState} from 'react';
import {
  ROUTES,
  RootStackParamList,
  WelcomeStackParamList,
} from '../../../static/types/routeTypes';
import {StackNavigationProp, createStackNavigator} from '@react-navigation/stack';

const Tab = createNativeStackNavigator<WelcomeStackParamList>();

export const MainPage = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.main}>
      {index !== 0 && (
        <BackArrow
          goBack={() => navigation.navigate(ROUTES.MAIN, {setIndex: setIndex})}
        />
      )}
      <Logo width={340} height={75} />
      <Text style={styles.logoSubText}>Dla ludzi i innych stworów</Text>
      <View style={globalStyles.navigationWrapper}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          id="MainStack"
        >
          <Tab.Screen
            name={ROUTES.MAIN}
            options={{animation: 'fade'}}
            component={Main}
            initialParams={{setIndex: setIndex}}
          />
          <Tab.Screen
            name={ROUTES.LOGIN}
            options={{animation: 'fade'}}
            component={LoginForm}
            initialParams={{setIndex}}
          />
          <Tab.Screen
            name={ROUTES.REGISTER}
            options={{animation: 'fade'}}
            component={RegisterForm}
            initialParams={{setIndex: setIndex}}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};
