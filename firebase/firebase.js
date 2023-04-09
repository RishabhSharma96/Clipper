import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_AUTH_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBSE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DB_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER,
    appId: process.env.NEXT_PUBLIC_APP_ID
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export { app, auth, firestore, storage };
