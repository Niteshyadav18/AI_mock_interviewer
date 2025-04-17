// firebase/admin.ts

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK only once
const initFirebaseAdmin = () => {
    const apps = getApps();

    if (!apps.length) {
        initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"), // Handles line breaks
            }),
        });
    }

    return {
        auth: getAuth(),
        db: getFirestore(), // Access Firestore with Admin privileges
    };
};

// Export auth and db globally
export const { auth, db } = initFirebaseAdmin();
