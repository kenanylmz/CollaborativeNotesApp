import {initializeApp} from '@react-native-firebase/app';
import {getDatabase} from '@react-native-firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBtrszdekd6HjghsBiAU0qi4E8cXB_T7MM',
  authDomain: 'collaborative-notes-app-9bfa5.firebaseapp.com',
  projectId: 'collaborative-notes-app-9bfa5',
  storageBucket: 'collaborative-notes-app-9bfa5.firebasestorage.app',
  databaseURL:
    'https://collaborative-notes-app-9bfa5-default-rtdb.firebaseio.com',
  messagingSenderId: '219570157923',
  appId: '1:219570157923:android:c28f0b2930ed2ff1fc7b56',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

// Debug için
console.log('Firebase initialized:', app);
console.log('Database reference:', database);
