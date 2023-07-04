import firestore from '@react-native-firebase/firestore';
import {TUser} from '../../../xstate/User/types';
import {COLLECTIONS} from '../../../static/consts/firebase';
import {FirebaseError} from '@firebase/util';
export const getUserData = async (context: TUser) => {
  try {
    const data = await firestore().collection(COLLECTIONS.USERS).doc(context.id).get();
    return data.data() as TUser;
  } catch (err) {
    if (err instanceof FirebaseError) {
      throw new Error(err.message);
    }
    throw new Error();
  }
};
