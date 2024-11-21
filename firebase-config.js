import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsHyYYgkMSrYo2xgufZ2wzSygYfZxrJWY",
    authDomain: "study-flashcard-application.firebaseapp.com",
    databaseURL: "https://study-flashcard-application.firebaseio.com",  // Add this line for Realtime Database
    projectId: "study-flashcard-application",
    storageBucket: "study-flashcard-application.appspot.com",
    messagingSenderId: "698845137592",
    appId: "1:698845137592:web:a577e50b043edda67e024d",
    measurementId: "G-FE16XLHB78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);  // Initialize Realtime Database
