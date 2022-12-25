import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5yDH-lb-0GuchSvo-bMWxfXLY_1BWJtU",
  authDomain: "todo-app-a7a0b.firebaseapp.com",
  projectId: "todo-app-a7a0b",
  storageBucket: "todo-app-a7a0b.appspot.com",
  messagingSenderId: "949897299233",
  appId: "1:949897299233:web:38db6cfd1d371e8433ea60",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(initializeApp);

const todoCollectionRef = collection(db, "todo-list");

export const getTasks = async () => {
  const { docs } = await getDocs(todoCollectionRef);
  return docs;
};
