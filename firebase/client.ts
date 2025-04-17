import {initializeApp,getApp,getApps} from "firebase-admin/app";
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfqckeDZvKT7N6I0CJU6nMTfxmPsHr5w0",
    authDomain: "prepwise-b67bc.firebaseapp.com",
    projectId: "prepwise-b67bc",
    storageBucket: "prepwise-b67bc.firebasestorage.app",
    messagingSenderId: "608476104531",
    appId: "1:608476104531:web:967506adf2f64368ccc3a6",
    measurementId: "G-93XFVGWZT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);