
import {app, auth} from "../firebase/init.js";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";


// Initialize Firebase Authentication


// Import Firebase modules
// Initialize Firebase

const googleProvider = new GoogleAuthProvider();

// DOM Elements
const form = document.getElementById("form");
const usernameInput = document.getElementById("user-input");
const passwordInput = document.getElementById("pass-input");
const errorMessage = document.getElementById("error-message");
const googleSignInBtn = document.getElementById("google-signin");

// Regular form submission (Sign Up with email/password)
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if(usernameInput != null){
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();  
  // Basic form validation 
  if (!username || !password) {
    displayError("Please enter both username and password");
    return;
  }

  try {
   
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      username,
      password
    );
    const user = userCredential.user;

    console.log("User signed up:", user);
    clearError();

    // Redirect to dashboard or home page
    window.location.href = "/src/dashboard/dashboard.html";
  } catch (error) {
    handleAuthError(error);
  }
}
else{
  try{
    const first = document.getElementById("first-name");
    const last= document.getElementById("last-name");
    const studentid = document.getElementById("id-input");
    console.log("Student logged in as: ",first.value , last.value, studentid.value);
    window.location.href = "/src/dashboard/dashboard.html";
  }
  catch(error){
    handleAuthError(error);
  }
}
});

// Google Sign-In
googleSignInBtn.addEventListener("click", async () => {
  try {
    clearError();
    const result = await signInWithPopup(auth, googleProvider);

  
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    console.log("Google sign-in successful:", user);

    // Store token (optional)
    localStorage.setItem("googleToken", token);

    // Store user info (optional)
    localStorage.setItem(
      "user",
      JSON.stringify({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
      })
    );

    // Redirect to dashboard or home page
    window.location.href = "/src/dashboard/dashboard.html";
  } catch (error) {
    handleAuthError(error);
  }
});

// Handle authentication errors
function handleAuthError(error) {
  console.error("Authentication error:", error);

  let message = "An error occurred during authentication.";

  switch (error.code) {
    case "auth/popup-blocked":
      message = "Popup was blocked. Please allow popups for this website.";
      break;
    case "auth/popup-closed-by-user":
      message = "Authentication popup was closed before completion.";
      break;
    case "auth/email-already-in-use":
      message = "This email is already registered. Please log in instead.";
      break;
    case "auth/invalid-email":
      message = "Please enter a valid email address.";
      break;
    case "auth/weak-password":
      message = "Password is too weak. Please use at least 6 characters.";
      break;
    case "auth/user-not-found":
    case "auth/wrong-password":
      message = "Invalid email or password.";
      break;
    case "auth/too-many-requests":
      message = "Too many failed login attempts. Please try again later.";
      break;
    case "auth/cancelled-popup-request":
      return; // Don't show an error for this case
    default:
      message = `Error: ${error.message}`;
  }

  displayError(message);
}

// Display error message
function displayError(message) {
  errorMessage.textContent = message;
  errorMessage.style.color = "red";
}

// Clear error message
function clearError() {
  errorMessage.textContent = "";
}

// Check if user is already logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("User is already signed in:", user);

    // Optionally redirect to dashboard immediately
    // window.location.href = '/src/dashboard/dashboard.html';
  } else {
    // User is signed out
    console.log("No user is signed in");
  }
});


