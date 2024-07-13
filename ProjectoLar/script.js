
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getDatabase , ref , set , get , child } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-getDatabase.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCoWcajCFFMo3kzehQDEOMP21lOKqSJp_k",
    authDomain: "projectolara.firebaseapp.com",
    databaseURL: "https://projectolara-default-rtdb.firebaseio.com",
    projectId: "projectolara",
    storageBucket: "projectolara.appspot.com",
    messagingSenderId: "556462493784",
    appId: "1:556462493784:web:6736b500884a6f42e7ba2d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){

set(ref(db,'user/' + document.getElementById("username").value),{

    
})
    


  })
