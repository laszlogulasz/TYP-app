import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from './keys';

const fire = firebase.initializeApp(config);
const time = firebase.database.ServerValue.TIMESTAMP;
const fbProvider = new firebase.auth.FacebookAuthProvider();
const credential = firebase.auth.FacebookAuthProvider.credential(
  'EAANNb00cU1IBAGPz7N7xbT8g3hUfY61yTNYM5Uujzxl3zDGzAJzZBLGFda36St0wpE7uURyzb7SJNGsn2trRI0Ip7NlosXrBdMtAgi3cFD116xJCdZBzz2ZC6CIV3PpmJh0bk6jBtfMsQ5icxlj4l8W0ItMpodLonezEG69TkfAv61ZAIAJJ',
);
const authRef = firebase.auth();
const allRef = firebase
  .database()
  .ref()
  .child('typ');
const infoRef = firebase
  .database()
  .ref()
  .child('info');

export {
  fire, fbProvider, credential, authRef, allRef, infoRef, time,
};
