import 'firebase/database';

import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'your-data',
  authDomain: 'your-data',
  databaseURL: 'your-data',
  projectId: 'your-data',
  storageBucket: 'your-data',
  messagingSenderId: 'your-data',
  appId: 'your-data',
  measurementId: 'your-data',
};

const app = firebase.initializeApp(firebaseConfig);

const database = app.database();

export { database as default };
