import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBUbprOxH590MHsfSeuC5Ax1BG81nNXXzY",
    authDomain: "crown-db-8b0cc.firebaseapp.com",
    databaseURL: "https://crown-db-8b0cc.firebaseio.com",
    projectId: "crown-db-8b0cc",
    storageBucket: "crown-db-8b0cc.appspot.com",
    messagingSenderId: "479433629414",
    appId: "1:479433629414:web:8ce172aef3f23d31ac2527",
    measurementId: "G-938EW1E7N6"
};
export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapShot= await userRef.get()
    if (!snapShot.exists){
        const {displayName,email}=userAuth
        const createdAt=new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log ('There is an error ', error.message)
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider)
export default firebase;