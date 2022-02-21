// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqSa33Eog2BB9UNtuXJOWrV9giQ6crGgg",
    authDomain: "crwn-db-ae793.firebaseapp.com",
    projectId: "crwn-db-ae793",
    storageBucket: "crwn-db-ae793.appspot.com",
    messagingSenderId: "729204438284",
    appId: "1:729204438284:web:71c03dd28f6fa2a4c94529",
    measurementId: "G-0SK4RG9VXJ"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(app);

export const auth = getAuth(app);

export const firestore = getFirestore();


provider.setCustomParameters({ params: 'select_account' });

export const signInWithGoogle = () => {
    //  signInWithRedirect The redirect method is preferred on mobile devices.
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            console.error(errorCode)
            const errorMessage = error.message;
            // The email of the user's account used.
            console.error(errorMessage)
            const email = error.email;
            // The AuthCredential type that was used.
            console.log(email)
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(credential)
        }
        )
}

// After returning from the redirect when your app initializes you can obtain the result



