var firebaseConfig = {
  apiKey: "AIzaSyBHyu221JiiWHx6DuDzkDVGsXGYNmTAdSs",
  authDomain: "khhghghghghghghghgh.firebaseapp.com",
  projectId: "khhghghghghghghghgh",
  storageBucket: "khhghghghghghghghgh.appspot.com",
  messagingSenderId: "719178915535",
  appId: "1:719178915535:web:603cc1bcb44bbb06c761ba",
  measurementId: "G-V21C58Z7SH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    console.log("hi");
};