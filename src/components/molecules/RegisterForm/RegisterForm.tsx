import {View} from 'react-native';
import {CustomButton, Input, CustomText, PasswordInput, Variatns} from '../..';
import {SignInSchema} from '../../../validation';
import {styles} from './styles';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {registerUser} from '../../../api';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Dispatch, useCallback} from 'react';
import {ROUTES, RootStackParamList} from '../../../static/types/routeTypes';
import {StackNavigationProp} from '@react-navigation/stack';

type TRagisterFormProps = {
  setIndex: Dispatch<React.SetStateAction<number>>;
};
type FormValues = {
  login: string;
  mail: string;
  password: string;
};

export const RegisterForm = ({setIndex}: TRagisterFormProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {login: '', mail: '', password: ''},
    resolver: yupResolver(SignInSchema),
  });
  const onSubmit = (values: FormValues) => {
    registerUser(values);
  };

  useFocusEffect(
    useCallback(() => {
      setIndex(2);
    }, []),
  );
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputArea}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="Login"
            />
          )}
          name="login"
        />
        {errors.login && (
          <CustomText variant={Variatns.ERROR} text={errors.login.message} />
        )}
      </View>
      <View style={styles.inputArea}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="E-mail"
            />
          )}
          name="mail"
        />
        {errors.mail && (
          <CustomText variant={Variatns.ERROR} text={errors.mail.message} />
        )}
      </View>
      <View style={styles.inputArea}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <PasswordInput value={value} onChangeText={onChange} onBlur={onBlur} />
          )}
          name="password"
        />
        {errors.password && (
          <CustomText variant={Variatns.ERROR} text={errors.password.message} />
        )}
      </View>
      <CustomButton onPress={handleSubmit(onSubmit)} title="Zarejestruj" />
    </View>
  );
};
