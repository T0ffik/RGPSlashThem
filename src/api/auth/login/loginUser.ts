import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {FirebaseError} from '@firebase/util';
import firestore, {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {TUser} from '../../../xstate/User/types';

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
