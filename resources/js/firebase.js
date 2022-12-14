// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCs3JhMMPiP7dkNuaCQJSb3vUSBoXAwJYw",
    authDomain: "ebook-841da.firebaseapp.com",
    databaseURL:
        "https://ebook-841da-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ebook-841da",
    storageBucket: "ebook-841da.appspot.com",
    messagingSenderId: "905280844907",
    appId: "1:905280844907:web:1d4c0922a5e9c537006d2e",
    measurementId: "G-0JS5WNC45L",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
