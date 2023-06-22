import auth from '@react-native-firebase/auth';

type TOnRegisterProps = {
  login: string;
  password: string;
};

export const onRegister = ({login, password}: TOnRegisterProps) => {
  auth()
    .createUserWithEmailAndPassword(login, password)
    .then(user => alert(`założono konto dla: ${user.user.email}`))
    .catch(err => {
      alert('ups coś się wyjebało');
      console.log(err.message);
    });
};
