import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
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
