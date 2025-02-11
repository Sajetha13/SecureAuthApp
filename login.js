import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence, browserLocalPersistence, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// Firebase configuration
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

// Auto-Redirect if Already Logged In
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("✅ User already logged in:", user.email);
        window.location.href = "dashboard.html"; // Redirect if user is already logged in
    }
});


document.getElementById("loginBtn").addEventListener("click", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    if (!email || !password) {
        alert("Please enter email and password.");
        return;
    }

    // Set the correct persistence type
    const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;

    setPersistence(auth, persistenceType)
        .then(() => {
            return signInWithEmailAndPassword(auth, email, password);
        })
        .then((userCredential) => {
            alert("Login successful!");

            // Wait for Firebase to confirm login before redirecting
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log("User logged in:", user.email);
                    window.location.href = "dashboard.html";
                }
            });
        })
        .catch((error) => {
            console.error(error.code);
            alert("Error: " + error.message);
        });
});

// Check if user is already logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is already logged in:", user.email);
    }
});

// Function to toggle password visibility
function togglePassword(id) {
    const passwordField = document.getElementById(id);
    const eyeIcon = passwordField.nextElementSibling; // Select the next element (eye icon)

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.textContent = "🙈"; // Change icon to indicate visibility
    } else {
        passwordField.type = "password";
        eyeIcon.textContent = "👁️"; // Change icon back
    }
}
