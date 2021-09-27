import { firebaseConfig } from "../firebaseConfig";
import firebase from "firebase/compat/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { HackIdea } from "../interfaces/documentData";

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getData() {
  const ideaCollection = collection(db, "ideas");
  const collectionSnapshot = await getDocs(ideaCollection);
  const ideaList = collectionSnapshot.docs.map((doc) => doc.data());
  return ideaList;
}

export async function saveData(data: HackIdea) {
  const ideaRef = collection(db, "ideas");
  const docRef = await addDoc(ideaRef, data);
  console.log(docRef);
}
