import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdNhae1hVwes09OxM3yw0uEcYHQRch1-Y",
    authDomain: "hackbyte-7873a.firebaseapp.com",
    databaseURL: "https://hackbyte-7873a-default-rtdb.firebaseio.com",
    projectId: "hackbyte-7873a",
    storageBucket: "hackbyte-7873a.appspot.com",
    messagingSenderId: "987913499986",
    appId: "1:987913499986:web:904122facade79bcaff68b"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// export
export { app, auth, firestore, storage };
