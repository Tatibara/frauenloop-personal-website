import 'firebase/database';

import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyChTetoPmm9qnAAysYGELEhBZB1oUtcoVU',
  authDomain: 'personal-website-778cc.firebaseapp.com',
  databaseURL: 'https://personal-website-778cc.firebaseio.com',
  projectId: 'personal-website-778cc',
  storageBucket: 'personal-website-778cc.appspot.com',
  messagingSenderId: '14127586820',
  appId: '1:14127586820:web:596049565a676bbdca5f51',
  measurementId: 'G-MC4DSJ6PWY',
};

const app = firebase.initializeApp(firebaseConfig);

const database = app.database();

export { database as default };
