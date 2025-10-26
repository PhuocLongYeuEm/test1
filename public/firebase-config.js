
import { getAuth } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBIhrVeIyyoPe0OSV33qb9MPV_u3IICeYk",
    authDomain: "khkt-fb4ba.firebaseapp.com",
    projectId: "khkt-fb4ba",
    storageBucket: "khkt-fb4ba.firebasestorage.app",
    messagingSenderId: "759080363938",
    appId: "1:759080363938:web:9516ebd7d01298bd8734fb",
    measurementId: "G-YFGCWRFCWK"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);