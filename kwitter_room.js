var firebaseConfig = {
      apiKey: "AIzaSyAlME5hviPRPR-inp718EEm8k-JCmGXcm4",
      authDomain: "kwitter-99449.firebaseapp.com",
      databaseURL: "https://kwitter-99449-default-rtdb.firebaseio.com",
      projectId: "kwitter-99449",
      storageBucket: "kwitter-99449.appspot.com",
      messagingSenderId: "1046624061079",
      appId: "1:1046624061079:web:26f0dfba6cc88fb7a5cbd2"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      
      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
 document.getElementById("output").innerHTML += row;     
//End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}