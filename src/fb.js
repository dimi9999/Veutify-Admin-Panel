// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfkNhMQ5MERVDp75HTuyR2PlY363yYE4o",
    authDomain: "todo-ninja-c6999.firebaseapp.com",
    projectId: "todo-ninja-c6999",
    storageBucket: "todo-ninja-c6999.appspot.com",
    messagingSenderId: "223355347106",
    appId: "1:223355347106:web:ca71412c899c6a7a9477fb",
    measurementId: "G-RTGV0R9M92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
//db.settings({ timestampsInSnapshots: true });

export default db;