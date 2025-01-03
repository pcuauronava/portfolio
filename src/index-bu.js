import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = {
    apiKey: "AIzaSyBDu-Aw4ibBhgyuO2BHs_7p_aDv5vZ2bFY",
  authDomain: "portfolio-data-46a51.firebaseapp.com",
  projectId: "portfolio-data-46a51",
  storageBucket: "portfolio-data-46a51.appspot.com",
  messagingSenderId: "869359154317",
  appId: "1:869359154317:web:198c976f17bc103b1e1ec4"
};

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Detect auth state
onAuthStateChanged(auth, (user) => {
    if (user !== null) {
        console.log('User is signed in');
    } else {
        console.log('No user is signed in');
        }}
    );