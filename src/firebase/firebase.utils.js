import firebase from 'firebase/app';
import 'firebase/firestore';

import 'firebase/auth';



 const config = {
    apiKey: 'AIzaSyDVDM9rUmOi7vq0hlInEAgTrq8nRpUSs54',
    authDomain: 'crwn-db-5bbe3.firebaseapp.com',
    databaseURL: 'https://crwn-db-5bbe3.firebaseio.com',
    projectId: 'crwn-db-5bbe3',
    storageBucket: '',
    messagingSenderId: '458352821664',
    appId: '1:458352821664:web:aca4db0e7c02ef122650c5'
  };

  export const  createUserProfileDocument = async (userAuth,  additionalData) => {
       
     if(!userAuth) return;

     const userRef = firestor.doc(`users/${userAuth.uid}`);
     const snapShot = await userRef.get();
     
      if(!snapShot.exists)
      {
        const {displayName, email} = userAuth;

        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })

        }catch (error){
          console.log('error creating user', error.message);
        }
      }
      return userRef;
  };

  firebase.initializeApp(config);

  export const  auth = firebase.auth();
  export const firestor = firebase.firestore();

  const provider = new  firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promp: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;