import * as Yup from 'yup';
export const SignInSchema = Yup.object().shape({
  login: Yup.string()
    .min(3, 'Za krótkie')
    .max(20, 'Za długie')
    .required('To pole jest wymagane'),
  mail: Yup.string().email('Nie poprawny adres e-mail').required('To pole jest wymagane'),
  password: Yup.string()
    .required('To pole jest wymagane')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Min 8 znaków, jedna mała, jedna duża litera i znak specjalny ;)',
    ),
});
