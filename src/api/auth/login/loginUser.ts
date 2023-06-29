import auth from '@react-native-firebase/auth';
import {FirebaseError} from '@firebase/util';
import firestore from '@react-native-firebase/firestore';
import {TUser} from '../../../xstate/User/types';

type TOnLoginProps = {
  email: string;
  password: string;
};

export const loginUser = async ({email, password}: TOnLoginProps) => {
  try {
    const data = await auth().signInWithEmailAndPassword(email, password);
    const user = await firestore().collection('Users').doc(data.user.uid).get();
    return user.data() as TUser;
  } catch (err) {
    if (err instanceof FirebaseError) {
      throw new Error(err.message);
    }
    throw new Error();
  }
};
