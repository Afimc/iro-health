import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGJo1ai_hhe-q95a4XtDjCPBb82uzhX4w",
  authDomain: "iro-health.firebaseapp.com",
  projectId: "iro-health",
  storageBucket: "iro-health.appspot.com",
  messagingSenderId: "186926462664",
  appId: "1:186926462664:web:1577bef3fcf336ed0157fd",
  measurementId: "G-FLYVKBBVLX"
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);


export const createUserWithEmail = (email:string, password:string) => createUserWithEmailAndPassword(auth, email, password);
export const currentUser = auth.currentUser