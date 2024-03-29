import {View} from 'react-native';
import {CustomButton, Input, CustomText, PasswordInput, Variatns} from 'Components/index';
import {yupResolver} from '@hookform/resolvers/yup';
import {styles} from './styles';
import {loginUser} from 'Api/index';
import {useForm, Controller} from 'react-hook-form';
import {LogInSchema} from 'Validation/loginValidation';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {WelcomeStackParamList} from 'Static/types/routeTypes';

type TLoginFormProps = StackScreenProps<WelcomeStackParamList, 'Login', 'MainStack'>;

type FormValues = {
  email: string;
  password: string;
};
export const LoginForm = ({navigation, route}: TLoginFormProps) => {
  const {setIndex} = route.params;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
    defaultValues: {email: '', password: ''},
    resolver: yupResolver(LogInSchema),
  });
  const onSubmit = (data: FormValues) => {
    loginUser(data);
  };

  useFocusEffect(
    useCallback(() => {
      setIndex(1);
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
              placeholder="Email"
            />
          )}
          name="email"
        />
        {errors.email && (
          <CustomText variant={Variatns.ERROR} text={errors.email.message} />
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
      <CustomButton title="Zaloguj" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
