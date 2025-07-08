// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArXNEjCuFAnS0I5VxYVBfNGRhiqe4c9zU",
  authDomain: "project-bacbo-conta5.firebaseapp.com",
  projectId: "project-bacbo-conta5",
  storageBucket: "project-bacbo-conta5.appspot.com",
  messagingSenderId: "305567266710",
  appId: "1:305567266710:web:7f98634856fa1239b8cfb7",
  measurementId: "G-VTR1RGNVD6"
};

// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);

// Exporta o Auth para usar no Login.tsx
export const auth = getAuth(app);
