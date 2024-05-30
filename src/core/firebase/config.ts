import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { initializeFirestore, collection, onSnapshot, addDoc, updateDoc, doc, setDoc, getDoc } from 'firebase/firestore'
import { ISimptomsData, IUserData } from "../interfaces";

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
export const logInWithEmail = (email: string, password: string) =>signInWithEmailAndPassword(auth, email, password);
export const createUserWithEmail = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
export const userLogOut = () => signOut(auth);
export const DB = initializeFirestore(firebaseApp, {});
const PatientsCollection = collection(DB, 'Patients');

export  const onSnapsotUserData = (logedUser:any, func:any) =>{
  const docRef = doc(DB, 'Patients', logedUser);
   onSnapshot(docRef,func)
} 

export const onSnapshotUserCollection = (func: any) => onSnapshot(PatientsCollection, func)
// getDocs(PatientsCollection)
//   .then((result)=>{
//     console.log({result})
//   })

export const unSubscribe = onSnapshot(PatientsCollection,(result2)=>{
  // console.log({result2})
  return result2
})
unSubscribe()

export const addInfo = (data:ISimptomsData) => addDoc(PatientsCollection,data)
  .then((result3)=>{
    // console.log({result3})
  })
  .catch((error)=>{
    console.log(error);
  })


export const SetDOC = (id:any, data:any) => {
  const docRef = doc(DB, "Patients", id)
  setDoc(docRef, data)
}


export async function getSpecificDocument( documentId:string) {
  // Reference to the specific document
  const docRef = doc(DB, 'Patients', documentId);
  
  // Fetch the document
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    // Document data
    return docSnap.data()
  } else {
    // Document does not exist
    console.log("No such document!");
  }
}


 


  // export const updateSimptoms = (data:ISimptomsData) => updateDoc('','',{})
  // .then((result3)=>{
  //   console.log({result3})
  // })
  // .catch((error)=>{
  //   console.log(error);
  // })

  export async function updateDocs(collectionPath:any, docId:any, updateData:any) {
    try {
        const docRef = doc(DB, 'Patients', docId);
        await updateDoc(docRef, updateData);
        console.log("Document successfully updated!");
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}


export const update =(data:IUserData,docId:any) =>updateDocs(PatientsCollection, docId,data )
  


