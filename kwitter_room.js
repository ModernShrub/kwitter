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
  firebase.analytics();

 var user_name = localStorage.getItem("user_name");

document.getElementById("name").innerHTML = "Welcome " + user_name + "!";

  function addRoom() {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose : "adding room names" 
     });
     localStorage.setItem("room_name", room_name);
     window.location = "kwitter_msg.htm";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room-names - " + Room_names);
row = "<div class = 'room_name' id = '" + Room_names + "' onclick = 'RedirecttoRoomname(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function RedirecttoRoomname(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";    
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
