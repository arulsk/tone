import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCUbNo-6-6IOp37Y9isPEpw1HBEaZl4Mk8",
  authDomain: "arulchat-9ae4b.firebaseapp.com",
  projectId: "arulchat-9ae4b",
  storageBucket: "arulchat-9ae4b.appspot.com",
  messagingSenderId: "437879593565",
  appId: "1:437879593565:web:d335c29fc91ae76e438bb4"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export  const storage = getStorage();
export const db= getFirestore();
