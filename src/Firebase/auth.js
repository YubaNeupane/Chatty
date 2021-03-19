import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyA_2yv6DWRW8-YoH6SbD6utJ9qBhOtfcJs',
  authDomain: 'chat-9adf2.firebaseapp.com',
  databaseURL: 'https://chat-9adf2.firebaseio.com',
  projectId: 'chat-9adf2',
  storageBucket: 'chat-9adf2.appspot.com',
  messagingSenderId: '361095347350',
  appId: '1:361095347350:web:ab1c46fbb764a022fc16b7',
};
const app = firebase.initializeApp(config);
export const db = firebase.firestore(app);
export default firebase;
