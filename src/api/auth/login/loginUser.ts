import auth from '@react-native-firebase/auth';
import {FirebaseError} from '@firebase/util';
import firestore from '@react-native-firebase/firestore';

type TOnLoginProps = {
  mail: string;
  password: string;
};

export const loginUser = async ({mail, password}: TOnLoginProps) => {
  try {
    const data = await auth().signInWithEmailAndPassword(mail, password);
    const user = await firestore().collection('Users').doc(data.user.uid).get();
    return user.data();
  } catch (err) {
    if (err instanceof FirebaseError) {
      throw new Error(err.message);
    }
    throw new Error();
  }
};
