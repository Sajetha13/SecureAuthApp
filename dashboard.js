import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDjskVj8_P4xQMIAeVLk5XciLLwIBSK7BM",
  authDomain: "authapp-3a8fc.firebaseapp.com",
  projectId: "authapp-3a8fc",
  storageBucket: "authapp-3a8fc.firebasestorage.app",
  messagingSenderId: "161747147740",
  appId: "1:161747147740:web:ba0348e880cf841fab4d19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Wait until Firebase fully loads user state
onAuthStateChanged(auth, (user) => {
    const userEmailSpan = document.getElementById("userEmail");

    if (user) {
        console.log("✅ User is logged in:", user.email);
        if (userEmailSpan) userEmailSpan.textContent = user.email; // Avoid errors if element is missing
    } else {
        console.log("❌ No user detected, redirecting to login.");
        
        //  Redirect only if NOT already on the login page
        if (!window.location.pathname.includes("login.html")) {
            window.location.href = "login.html";
        }
    }
});


