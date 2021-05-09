var firebaseConfig = {
    apiKey: "AIzaSyDUwqY-bTfZMD1pdXMioZmYN4R6GYvXMb4",
    authDomain: "kwitter-8f52e.firebaseapp.com",
    databaseURL: "https://kwitter-8f52e.firebaseio.com",
    projectId: "kwitter-8f52e",
    storageBucket: "kwitter-8f52e.appspot.com",
    messagingSenderId: "700333318308",
    appId: "1:700333318308:web:e356ad7138bb7a68d28631",
    measurementId: "G-X07ZV078NX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.htm";
}