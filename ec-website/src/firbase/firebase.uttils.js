import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBQrSqoA-q16hyGmUbu8PBh5uyrXNzPdWY",
    authDomain: "reactec-web.firebaseapp.com",
    databaseURL: "https://reactec-web.firebaseio.com",
    projectId: "reactec-web",
    storageBucket: "reactec-web.appspot.com",
    messagingSenderId: "939447745931",
    appId: "1:939447745931:web:b0af2b3ae4917de81dc38e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;