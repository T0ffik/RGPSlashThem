import auth from '@react-native-firebase/auth';

type TOnLoginProps = {
  login: string;
  password: string;
};

export const onLogin = ({login, password}: TOnLoginProps) => {
  auth()
    .signInWithEmailAndPassword(login, password)
    .then(user => alert(`zalogowany to: ${user.user.email}`))
    .catch(err => {
      alert('złe dane logowania');
      console.log(err.message);
    });
};
