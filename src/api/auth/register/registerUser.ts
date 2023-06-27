import auth from '@react-native-firebase/auth';
import {FirebaseError} from '@firebase/util';
import firestore from '@react-native-firebase/firestore';

type TOnRegisterProps = {
  login: string;
  mail: string;
  password: string;
};

export const registerUser = async ({mail, login, password}: TOnRegisterProps) => {
  try {
    const newUser = await auth().createUserWithEmailAndPassword(mail, password);
    await firestore().collection('Users').doc(newUser.user.uid).set({
      id: newUser.user.uid,
      mail: newUser.user.email,
      login: login,
    });
  } catch (err) {
    if (err instanceof FirebaseError) {
      throw new Error(err.message);
    }
    throw new Error('Ups, coś się wyjebało');
  }
};
