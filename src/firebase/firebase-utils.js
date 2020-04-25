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
// in the next line userAth is the object that we take after signin from firebase
export const createUserProfileDocument = async (userAuth, additionalData)=>{
    // the (if) command in the next line make us sure that we take a valid object from Firebase
    if(!userAuth) return;

    // every userAuth has a constant uid and we use it as a key
    const userRef=firestore.doc(`users/${userAuth.uid}`)
 
    // next line takes a snapshot(bunch of data from userRef address) from the address that we sent((userRef))
    const snapShot= await userRef.get()

    // the (if) command in next line shows us if there is an account with userRef address or not. If not then it makes it.
    if (!snapShot.exists){
        const {displayName,email}=userAuth
        const createdAt=new Date()
        try{
            // next lines sets data to our database
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
    // we return userRef because we have the chance to use it somewhere else
    return userRef;
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
// the two following lines is for showing the popup menu for google sign in
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider)
export default firebase;