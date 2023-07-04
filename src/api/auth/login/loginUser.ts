import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {FirebaseError} from '@firebase/util';

type TOnLoginProps = {
  email: string;
  password: string;
};

export const loginUser = async ({email, password}: TOnLoginProps) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    if (err instanceof FirebaseError) {
      throw new Error(err.message);
    }
    throw new Error();
  }
};
