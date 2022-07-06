
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyCzt0mt4h8_OtKoXT9xzdJeBSYNpI9xSGs",
      authDomain: "kwitter-328f3.firebaseapp.com",
      databaseURL: "https://kwitter-328f3-default-rtdb.firebaseio.com",
      projectId: "kwitter-328f3",
      storageBucket: "kwitter-328f3.appspot.com",
      messagingSenderId: "530848526331",
      appId: "1:530848526331:web:dccc3222caf8eb00a9a55e",
      measurementId: "G-XN04WX7RMZ"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
