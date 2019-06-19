import firebase from "firebase";
 // Your web app's Firebase configuration

 const firebaseConfig = {
    apiKey: "AIzaSyDtPmqZu8BkTZ843CK70NHtazRFba3mlXU",
    authDomain: "sense-54d59.firebaseapp.com",
    databaseURL: "https://sense-54d59.firebaseio.com",
    projectId: "sense-54d59",
    storageBucket: "sense-54d59.appspot.com",
    messagingSenderId: "441662359325"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get the Database service for the default app
const db = firebase.database();
 export default  db 


  