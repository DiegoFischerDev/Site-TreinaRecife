import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAhrBEi1rOuOIgOMYObhlFJBRotxKgDvwY",
  authDomain: "treinarecife-6c37e.firebaseapp.com",
  projectId: "treinarecife-6c37e",
  storageBucket: "treinarecife-6c37e.appspot.com",
  messagingSenderId: "527157126618",
  appId: "1:527157126618:web:e3ba66796829636ec84ce3"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };