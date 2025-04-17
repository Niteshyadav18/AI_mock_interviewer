import {cert, getApps} from 'firebase-admin/app'
import {initializeApp} from "firebase-admin/app";
import {apps} from "firebase-admin";
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "@firebase/firestore";




const initFirebaseAdmin = () =>{
    const app = getApps

    if(!apps.length){
        initializeApp({
             credential: cert({
                projectId : process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey : process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")
            })
        })
    }
    return {
        auth: getAuth(),
        db: getFirestore()
    }

}
export const {auth,db}= initFirebaseAdmin()