import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAjMY26GV5dk5GqqycpfhvEmi7Wnk-lbWk",
    authDomain: "team-voting-app-3f8e4.firebaseapp.com",
    projectId: "team-voting-app-3f8e4",
    storageBucket: "team-voting-app-3f8e4.appspot.com",
    messagingSenderId: "151605800130",
    appId: "1:151605800130:web:1c71534f9d0c8901dedf5b",
    measurementId: "G-G29E4RFHB2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();