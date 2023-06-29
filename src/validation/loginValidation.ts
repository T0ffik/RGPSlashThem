import * as Yup from 'yup';
export const LogInSchema = Yup.object().shape({
  mail: Yup.string().email('Nie poprawny adres Email').required('To pole jest wymagane'),
  password: Yup.string().required('To pole jest wymagane'),
});
