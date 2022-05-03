import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const config ={
    firebase: {
        apiKey: "AIzaSyAUhwK4esAq9Xbe5Q4DzLNAk4-PRS2vRvo",
        authDomain: "mentorleader-7b6db.firebaseapp.com",
        projectId: "mentorleader-7b6db",
        storageBucket: "mentorleader-7b6db.appspot.com",
        messagingSenderId: "1018638308690",
        appId: "1:1018638308690:web:a428d5a39720e23b07168b",
        measurementId: "G-2VRHYG1PE4"
    }
}

export const app = initializeApp(config.firebase);
export const db = getFirestore(app);