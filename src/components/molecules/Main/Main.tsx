import {useCallback} from 'react';
import {CustomButton} from '../../atoms';
import {View} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {ROUTES, RootStackParamList} from '../../../static/types/routeTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {globalStyles} from '../../../utils/globalStyles';

type TMainProps = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};
export const Main = ({setIndex}: TMainProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useFocusEffect(
    useCallback(() => {
      setIndex(0);
    }, []),
  );
  return (
    <View
      style={[
        globalStyles.navigationWrapper,
        {
          alignItems: 'center',
        },
      ]}
    >
      <CustomButton title="Logowanie" onPress={() => navigation.navigate(ROUTES.LOGIN)} />
      <CustomButton
        title="Rejestracja"
        onPress={() => navigation.navigate(ROUTES.REGISTER)}
      />
    </View>
  );
};
