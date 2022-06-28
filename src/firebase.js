import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'authenticationapp-997b8.firebaseapp.com',
  projectId: 'authenticationapp-997b8',
  storageBucket: 'authenticationapp-997b8.appspot.com',
  messagingSenderId: '793273347843',
  appId: '1:793273347843:web:abbb7eaa8bb8bcff56c336',
  measurementId: 'G-F79FCX7RH8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
