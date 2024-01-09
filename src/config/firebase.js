
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APY_KEY,
    authDomain: "proyecreact.firebaseapp.com",
    projectId: "proyecreact",
    storageBucket: "proyecreact.appspot.com",
    messagingSenderId: "393830004196",
    appId: "1:393830004196:web:1eb7f6f44a55f6a39d03f1"
};


const app = initializeApp(firebaseConfig);

export const baseDeDatos = getFirestore(app);