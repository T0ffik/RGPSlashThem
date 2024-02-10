import {Text, View} from 'react-native';
import Logo from 'Static/imgs/rst_logo.svg';
import {styles} from './style';
import {
  BackArrow,
  GlobalStateContext,
  LoginForm,
  Main,
  RegisterForm,
} from 'Components/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from 'Utils/globalStyles';
import {useContext, useState} from 'react';
import {ROUTES, WelcomeStackParamList} from 'Static/types/routeTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {useActor} from '@xstate/react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Stack = createNativeStackNavigator<WelcomeStackParamList>();

export const MainPage = () => {
  const globalServices = useContext(GlobalStateContext);
  //@ts-ignore
  const [state] = useActor(globalServices.userService);
  const [index, setIndex] = useState(0);
  const navigation = useNavigation<StackNavigationProp<WelcomeStackParamList>>();

  return (
    <>
      {index !== 0 && (
        <BackArrow
          goBack={() => navigation.navigate(ROUTES.MAIN, {setIndex: setIndex})}
        />
      )}
      <KeyboardAwareScrollView
        contentContainerStyle={styles.main}
        extraHeight={10}
        extraScrollHeight={10}
        enableOnAndroid={true}
      >
        <Logo width={340} height={75} />
        <Text style={styles.logoSubText}>Dla ludzi i innych stworów</Text>
        <View style={globalStyles.navigationWrapper}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            id="MainStack"
          >
            <Stack.Screen
              name={ROUTES.MAIN}
              options={{animation: 'fade'}}
              component={Main}
              initialParams={{setIndex}}
            />
            <Stack.Screen
              name={ROUTES.LOGIN}
              options={{animation: 'fade'}}
              component={LoginForm}
              initialParams={{setIndex}}
            />
            <Stack.Screen
              name={ROUTES.REGISTER}
              options={{animation: 'fade'}}
              component={RegisterForm}
              initialParams={{setIndex}}
            />
          </Stack.Navigator>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};
