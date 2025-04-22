// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfqckeDZvKT7N6I0CJU6nMTfxmPsHr5w0",
    authDomain: "prepwise-b67bc.firebaseapp.com",
    projectId: "prepwise-b67bc",
    storageBucket: "prepwise-b67bc.firebasestorage.com",
    messagingSenderId: "608476104531",
    appId: "1:608476104531:web:967506adf2f64368ccc3a6",
    measurementId: "G-93XFVGWZT3"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)