import * as Yup from 'yup';

export const LogInSchema = Yup.object().shape({
  login: Yup.string().required('To pole jest wymagane'),
  password: Yup.string().required('To pole jest wymagane'),
});
