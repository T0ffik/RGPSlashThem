import firestore from '@react-native-firebase/firestore';

firestore()
  .collection('MaleWeapons')
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.docs[0].data());
  });
