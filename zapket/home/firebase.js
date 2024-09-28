// Import the Firebase libraries you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnucu680ghtXp1pjcrenKoHDuNUr8ItZc",
    authDomain: "zapket-7529f.firebaseapp.com",
    projectId: "zapket-7529f",
    storageBucket: "zapket-7529f.appspot.com",
    messagingSenderId: "770698171360",
    appId: "1:770698171360:web:588d8d4250e9cf5980d185"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to handle login
const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User logged in:", user);
            // Redirect or take action after successful login
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error logging in:", errorCode, errorMessage);
            // Handle error (e.g., display message to user)
        });
};

// Export the loginUser function for use in other files
export { loginUser };
