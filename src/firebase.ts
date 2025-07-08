// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyArXNEjCuFAnS0I5VxYVBfNGRhiqe4c9zU",
  authDomain: "project-bacbo-conta5.firebaseapp.com",
  projectId: "project-bacbo-conta5",
  storageBucket: "project-bacbo-conta5.appspot.com",
  messagingSenderId: "305567266710",
  appId: "1:305567266710:web:XXXXXX" // (coloque o appId completo se tiver)
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
