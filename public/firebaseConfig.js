import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD5UJYI2PNvq5jSc8Q9fTnlBhBBNQUX0YM",
    authDomain: "sirva-me-admin.firebaseapp.com",
    projectId: "sirva-me-admin",
    storageBucket: "sirva-me-admin.firebasestorage.app",
    messagingSenderId: "52673663491",
    appId: "1:52673663491:web:bbf82b234a13780bc7f436"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
