import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

const auth = getAuth();

// 🚪 Logout Function
document.getElementById("logoutBtn").addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            console.log("✅ User signed out");
            alert("Logged out successfully!");
            window.location.href = "index.html"; // Redirect after logout
        })
        .catch((error) => {
            console.error("Logout Error:", error);
        });
});
