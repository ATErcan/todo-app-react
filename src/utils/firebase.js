import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

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

export const todoCollectionRef = collection(db, "todo-list");

export const createTodo = async (task) => {
  await addDoc(todoCollectionRef, task);
};

export const removeTodo = async (id) => {
  const todoDoc = doc(db, "todo-list", id);
  await deleteDoc(todoDoc);
};

export const toggleTodo = async (todo) => {
  const todoDoc = doc(db, "todo-list", todo.id);
  const updatedTodo = { isDone: !todo.isDone };
  updateDoc(todoDoc, updatedTodo);
};
