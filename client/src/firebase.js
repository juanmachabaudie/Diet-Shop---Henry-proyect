import firebase from 'firebase/app';
import 'firebase/storage';

//pasar datos a .env
const firebaseConfig = {
    apiKey: "AIzaSyARw7CRlk8OWtFcoDtabIadIZaNo_fZdF0",
    authDomain: "henrydiet.firebaseapp.com",
    projectId: "henrydiet",
    storageBucket: "henrydiet.appspot.com",
    messagingSenderId: "198445287371",
    appId: "1:198445287371:web:0812db9bb5edfde5f7d84e",
    measurementId: "G-99T2794NWN"
  }
  
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  
  const storage = firebase.storage();

  export {
      storage,
      firebase as default
  }
  