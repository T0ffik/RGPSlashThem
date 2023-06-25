import {View} from 'react-native';
import {CustomButton, Input, CustomText, PasswordInput, Variatns} from '../..';
import {yupResolver} from '@hookform/resolvers/yup';
import {styles} from './styles';
import {loginUser} from '../../../api';
import {useForm, Controller} from 'react-hook-form';
import {LogInSchema} from '../../../validation';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {globalStyles} from '../../../utils/globalStyles';

type TLoginFormProps = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const LoginForm = ({setIndex}: TLoginFormProps) => {
  type FormValues = {
    mail: string;
    password: string;
  };
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
    defaultValues: {mail: '', password: ''},
    resolver: yupResolver(LogInSchema),
  });
  const onSubmit = (data: FormValues) => {
    loginUser(data);
  };

  useEffect(() => {
    if (navigation.isFocused()) {
      setIndex(1);
    }
  }, [navigation.isFocused()]);
  return (
    <View style={[globalStyles.navigationWrapper, {alignItems: 'center'}]}>
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
      <CustomButton title="Zaloguj" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
