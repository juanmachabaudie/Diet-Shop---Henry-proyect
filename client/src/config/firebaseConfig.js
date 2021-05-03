import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD2Kbz9B51QE1wrgkia4t-vBxnWxHZqDKs",
    authDomain: "numerique-54933.firebaseapp.com",
    projectId: "numerique-54933",
    storageBucket: "numerique-54933.appspot.com",
    messagingSenderId: "355849542922",
    appId: "1:355849542922:web:2c79d742884d52dfe2eef3",
    measurementId: "G-50X99W8JBB"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;