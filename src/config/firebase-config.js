import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpoCxWJqAWnSkJsVixXtdY10U58D0fynM",
  authDomain: "todo-app-55cdb.firebaseapp.com",
  projectId: "todo-app-55cdb",
  storageBucket: "todo-app-55cdb.appspot.com",
  messagingSenderId: "241403434859",
  appId: "1:241403434859:web:8b048f2ee835be358c9e2e",
  measurementId: "G-C836BY5CX4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
