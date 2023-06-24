import {NativeSyntheticEvent, Text, TextInputChangeEventData, View} from 'react-native';
import {CustomButton, Input, CustomText, PasswordInput, Variatns} from '../..';
// import {register} from '../../../api';
import {Formik} from 'formik';
import {SignInSchema} from '../../../validation';
import {styles} from './styles';
import {colors} from '../../../static/consts/colors';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {registerUser} from '../../../api';

export const RegisterForm = () => {
  type FormValues = {
    login: string;
    mail: string;
    password: string;
  };
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
  return (
    <View>
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
