import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
apiKey: "AIzaSyD5h6gG61PCgHtqQ9zOVjXLVBgTiS8tKvw",
  authDomain: "final-8487b.firebaseapp.com",
  projectId: "final-8487b",
  storageBucket: "final-8487b.appspot.com",
  messagingSenderId: "465050791737",
  appId: "1:465050791737:web:be39e6a69f935a053bc2e8"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export  const storage = getStorage();
export const db= getFirestore();
