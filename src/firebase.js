import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCs5qx3urdLbQenvqvmz1yxXcmYGLMnqyE',
  authDomain: 'proyectfire1.firebaseapp.com',
  projectId: 'proyectfire1',
  storageBucket: 'proyectfire1.appspot.com',
  messagingSenderId: '1024099140962',
  appId: '1:1024099140962:web:5adf2e88d97bd46263183b',
  measurementId: 'G-S4WC053M5G',
};
// Initialize Firebase

export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// console.log(app);
// const bdates =getFirestore (app)
// const auth= getAuth (app);
