import firebase from 'firebase';
import { config } from './keys';

const fire = firebase.initializeApp(config);
const time = firebase.database.ServerValue.TIMESTAMP;
const fbProvider = new firebase.auth.FacebookAuthProvider();
const authRef = firebase.auth();
const typRef = firebase.database().ref().child('typ');
const userRef = (user) => typRef.orderByChild('user').equalTo(user);
export {
  fire, fbProvider, authRef, typRef, time,
};
