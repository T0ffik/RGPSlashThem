import {Text, View} from 'react-native';
import {CustomButton, Input, InputErrorMessage, PasswordInput} from '../../../components';
import {onRegister} from '../../../api';
import {Formik} from 'formik';
import {SignInSchema} from '../../../validation';
import {styles} from './styles';
import {colors} from '../../../static/consts/colors';

export const Register = () => {
  type FormValues = {
    login: string;
    mail: string;
    password: string;
  };
  const onSubmit = (values: FormValues) => {
    onRegister(values);
  };
  return (
    <Formik
      initialValues={{login: '', password: '', mail: ''}}
      onSubmit={onSubmit}
      validationSchema={SignInSchema}
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
            <Input
              value={values.mail}
              onChange={handleChange('mail')}
              onBlur={handleBlur('mail')}
              placeholder="E-mail"
            />
            {touched.mail && errors.mail && (
              <InputErrorMessage>{errors.mail}</InputErrorMessage>
            )}
          </View>
          <View style={styles.inputArea}>
            <PasswordInput
              value={values.password}
              onChange={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            {touched.password && errors.password ? (
              <InputErrorMessage>{errors.password}</InputErrorMessage>
            ) : (
              <Text
                style={{
                  color: colors.inputPlaceholder,
                  fontSize: 12,
                  marginTop: 10,
                  marginBottom: -11,
                }}
              >
                Hasło powinno zawierać przynajmniej jedną dużą literę, znak oraz cyfrę
              </Text>
            )}
          </View>
          <CustomButton onPress={handleSubmit} title="Zarejestruj" />
        </View>
      )}
    </Formik>
  );
};
