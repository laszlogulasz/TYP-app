//import Rebase from 're-base';
import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyBss9cUPEkxFLg4ZhNOPZI8-IwcanomcEc",
  authDomain: "typ-app.firebaseapp.com",
  databaseURL: "https://typ-app.firebaseio.com",
  projectId: "typ-app",
  storageBucket: "typ-app.appspot.com",
  messagingSenderId: "683936566565"
};
const fire = firebase.initializeApp(config);
const fbProvider = new firebase.auth.FacebookAuthProvider();

export {fire, fbProvider};
