// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

// init firebase app
const app = initializeApp(firebaseConfig);

// create a new instance for firebaseConfig
const provider = new GoogleAuthProvider(app);

// init services
const db = getFirestore()

export const auth = getAuth(app);


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    // User Reference
    const userRef = doc(db, 'users', `${userAuth.uid}`)
    // get a single user document
    const docSnap = await getDoc(userRef)
    // When the user is not found
    if (!docSnap.exists()) {
        const { displayName, email } = userAuth
        const createAt = new Date()
        try {
            // If the user is not logged in then Add a new document in collection "users"
            await setDoc(userRef, { displayName, email, createAt, ...additionalData })
        } catch (error) {
            // doc.data() will be undefined in this case
            console.log("error adding a new (document'user')!", error);
        }
    }

    //  this return for we might still want to use a reference in our code
    //  So that's why we're going to return it from this user.
    return userRef;
}

provider.setCustomParameters({ params: 'select_account' });

export const signInWithGoogle = () => {
    //  signInWithRedirect The redirect method is preferred on mobile devices.
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            GoogleAuthProvider.credentialFromResult(result);
        }).catch((error) => {
            // Handle Errors here.
            console.error(error);
        }
        )
}

// After returning from the redirect when your app initializes you can obtain the result



