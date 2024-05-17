import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { initializeFirestore, collection, getDocs, onSnapshot, addDoc, updateDoc, doc} from 'firebase/firestore'
import { ISimptomsData } from "../interfaces";

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
export const auth = getAuth(firebaseApp);
export const logInWithEmail = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
export const createUserWithEmail = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
export const logOut = () => signOut(auth)
export const DB = initializeFirestore(firebaseApp, {})

const PatientsCollection = collection(DB, 'Patients')
export const onSnapshotUserCollection = (func: any) => onSnapshot(PatientsCollection, func)
getDocs(PatientsCollection)
  .then((result)=>{
    console.log({result})
    // result.docs[0].id
    
  })


const unSubscribe = onSnapshot(PatientsCollection,(result2)=>{
  console.log({result2})
})

unSubscribe()

export const addSimptoms = (data:ISimptomsData) => addDoc(PatientsCollection,data)
  .then((result3)=>{
    console.log({result3})
  })
  .catch((error)=>{
    console.log(error);
  })


  // export const updateSimptoms = (data:ISimptomsData) => updateDoc('','',{})
  // .then((result3)=>{
  //   console.log({result3})
  // })
  // .catch((error)=>{
  //   console.log(error);
  // })

  export async function updateDocs(collectionPath:any, docId:any, updateData:any) {
    try {
        const docRef = doc(DB, collectionPath, docId);
        await updateDoc(docRef, updateData);
        console.log("Document successfully updated!");
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}


export const update =(data:ISimptomsData) =>updateDocs(PatientsCollection, PatientsCollection.id,data )
  


