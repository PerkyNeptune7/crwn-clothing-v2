import { initializeApp } from 'firebase/app';

import {
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged
   } from 'firebase/auth'

import{
  getFirestore, 
  doc, 
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBxNISWLRjTYvAq9lHkg94CT2qO4rIeAys",
    authDomain: "crwn-clothing-db-53bf3.firebaseapp.com",
    projectId: "crwn-clothing-db-53bf3",
    storageBucket: "crwn-clothing-db-53bf3.appspot.com",
    messagingSenderId: "616565091289",
    appId: "1:616565091289:web:2521d36709ecf91e9807c8"
  };
  
  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();


  provider.setCustomParameters({
    prompt: "select_account"
  });
  


  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);

  export const db= getFirestore();
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={displayName: 'mike'}) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt= new Date();
      try{
        await setDoc(userDocRef, {
          displayName, 
          email, 
          createdAt, 
          ...additionalInformation, 
        });
      }catch(error){
        console.log(error);
    }
    }
    return userDocRef;
  };
  
  export const createAuthUserWithEmailAndPassword = async(email, password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);

  }
  export const signInAuthUserWithEmailAndPassword = async(email, password)=>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);

  }
  export const SignOutUser = async() => await signOut(auth);

  export const onAuthStateChangedListener = (callback)=> onAuthStateChanged(auth, callback);