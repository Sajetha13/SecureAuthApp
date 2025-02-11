import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

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
// Initialize Firebase Authentication
const auth = getAuth();

// Select the registration form
const registerForm = document.getElementById("register-form");

// Event listener for form submission
registerForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents page reload

    // Get user input values from the form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Firebase function to create a new user
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User registered successfully
            alert("Registration successful!"); // Show success message
            window.location.href = "login.html"; // Redirect to login page
        })
        .catch((error) => {
            alert(error.message); 
        });
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "login.html";
    }
});
function togglePassword(id) {
    const passwordField = document.getElementById(id);
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}
