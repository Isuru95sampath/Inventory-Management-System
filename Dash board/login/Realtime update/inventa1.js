
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getDatabase, ref,st, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBcf485r9MQMUvGu9CeersggFc54clzfZY",
    authDomain: "inventrymanagment.firebaseapp.com",
    projectId: "inventrymanagment",
    storageBucket: "inventrymanagment.firebasestorage.app",
    messagingSenderId: "1098731236731",
    appId: "1:1098731236731:web:782e5be78b01ada39b61de"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //grt ref to database service
  const db = getDatabase(app);
  document.getElementById("lbutton").addEventListener('click', function(e){
    set(ref(db, 'user/' +  document.getElementById( "loginEmail").value),
{
    loginEmail : document.getElementById("loginEmail").value,
    loginPassword : document.getElementById("loginPassword").value,

    
});
    alert("login sucsusfull ..")
  })
