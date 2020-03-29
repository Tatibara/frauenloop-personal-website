import 'firebase/database';

import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'you-data',
  authDomain: 'you-data',
  databaseURL: 'you-data',
  projectId: 'you-data',
  storageBucket: 'you-data',
  messagingSenderId: 'you-data',
  appId: 'you-data',
  measurementId: 'you-data',
};

const app = firebase.initializeApp(firebaseConfig);

const database = app.database();

export { database as default };
