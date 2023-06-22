import auth from '@react-native-firebase/auth';

type TOnRegisterProps = {
  login: string;
  mail: string;
  password: string;
};

export const onRegister = ({mail, login, password}: TOnRegisterProps) => {
  auth()
    .createUserWithEmailAndPassword(mail, password)
    .then(user => alert(`założono konto dla: ${user.user.email}`))
    .catch(err => {
      alert('ups coś się wyjebało');
      console.log(err.message);
    });
};
