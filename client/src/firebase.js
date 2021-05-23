//npm install firebase 
import firebase from 'firebase/app'
import 'firebase/auth'



let firebaseConfig = {
    apiKey: "AIzaSyARw7CRlk8OWtFcoDtabIadIZaNo_fZdF0",
    authDomain: "henrydiet.firebaseapp.com",
    projectId: "henrydiet",
    storageBucket: "henrydiet.appspot.com",
    messagingSenderId: "198445287371",
    appId: "1:198445287371:web:0812db9bb5edfde5f7d84e",
    measurementId: "G-99T2794NWN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
//action creator
//iniciar sesion
  export function loginWithGoogle() {   //a esya funciom se la pasamos al reducer para que con una accion podamos hacer el logging
      let provider = new firebase.auth.GoogleAuthProvider()
      return firebase.auth().signInWithPopup(provider)
      .then(snap =>snap.user)
  }

//cerrar sesion 
export function singOutGoogle() {
firebase.auth().signOut()
}