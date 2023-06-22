import {View} from 'react-native';
import {CustomButton, Input, InputErrorMessage, PasswordInput} from '../../../components';
import {Formik} from 'formik';
import {LogInSchema} from '../../../validation';
import {styles} from './styles';
import {onLogin} from '../../../api';

export const Login = () => {
  type FormValues = {
    login: string;
    password: string;
  };
  const onSubmit = (values: FormValues) => {
    onLogin(values);
  };
  return (
    <Formik
      initialValues={{login: '', password: ''}}
      onSubmit={onSubmit}
      validationSchema={LogInSchema}
    >
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
        <View>
          <View style={styles.inputArea}>
            <Input
              value={values.login}
              onChange={handleChange('login')}
              onBlur={handleBlur('login')}
              placeholder="Login"
            />
            {touched.login && errors.login && (
              <InputErrorMessage>{errors.login}</InputErrorMessage>
            )}
          </View>
          <View style={styles.inputArea}>
            <PasswordInput
              value={values.password}
              onChange={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            {touched.password && errors.password && (
              <InputErrorMessage>{errors.password}</InputErrorMessage>
            )}
          </View>
          <CustomButton title="Zaloguj" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};
