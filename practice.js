
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBIlZN8RgDUeHUPLXvMMbbJLzYeMKPSrmo",
    authDomain: "projectkwitter-99c23.firebaseapp.com",
    databaseURL: "https://projectkwitter-99c23-default-rtdb.firebaseio.com",
    projectId: "projectkwitter-99c23",
    storageBucket: "projectkwitter-99c23.appspot.com",
    messagingSenderId: "634519357210",
    appId: "1:634519357210:web:8e995767f6b0d534bd0ea3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}