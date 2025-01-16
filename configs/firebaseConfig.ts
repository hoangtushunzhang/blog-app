
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "htshun-blog-app.firebaseapp.com",
    projectId: "htshun-blog-app",
    storageBucket: "htshun-blog-app.firebasestorage.app",
    messagingSenderId: "361051743685",
    appId: "1:361051743685:web:3c0e83608e1e2f8f9197ac",
    measurementId: "G-D4SWNHLQM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);