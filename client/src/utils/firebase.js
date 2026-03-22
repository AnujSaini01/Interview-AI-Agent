
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-2c2b9.firebaseapp.com",
  projectId: "interviewiq-2c2b9",
  storageBucket: "interviewiq-2c2b9.firebasestorage.app",
  messagingSenderId: "43612289689",
  appId: "1:43612289689:web:ad063f2ee7628ea3b6d608"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}