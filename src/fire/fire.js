import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from './keys';

const fire = firebase.initializeApp(config);
const time = firebase.database.ServerValue.TIMESTAMP;
const fbProvider = new firebase.auth.FacebookAuthProvider();
const authRef = firebase.auth();
const allRef = firebase.database().ref().child('typ');
const infoRef = firebase.database().ref().child('info');

export {
  fire, fbProvider, authRef, allRef, infoRef, time,
};
