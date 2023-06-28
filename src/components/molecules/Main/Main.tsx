import {useCallback} from 'react';
import {CustomButton} from '../../atoms';
import {View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {
  ROUTES,
  RootStackParamList,
  WelcomeStackParamList,
} from '../../../static/types/routeTypes';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from './styles';

type TMainProps = StackScreenProps<WelcomeStackParamList, 'Main', 'MainStack'>;
export const Main = ({navigation, route}: TMainProps) => {
  const {setIndex} = route.params;
  useFocusEffect(
    useCallback(() => {
      setIndex(0);
    }, []),
  );
  return (
    <View style={styles.wrapper}>
      <CustomButton
        title="Logowanie"
        onPress={() => navigation.navigate(ROUTES.LOGIN, {setIndex})}
      />
      <CustomButton
        title="Rejestracja"
        onPress={() => navigation.navigate(ROUTES.REGISTER, {setIndex})}
      />
    </View>
  );
};
