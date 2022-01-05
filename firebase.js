import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCY9-CoLND5hro47Odp3F-wZRRKxfRSOvI",
    authDomain: "whatsapp-2-0-dee56.firebaseapp.com",
    projectId: "whatsapp-2-0-dee56",
    storageBucket: "whatsapp-2-0-dee56.appspot.com",
    messagingSenderId: "4397924943",
    appId: "1:4397924943:web:6a8bb3c94957cc363a203a",
    measurementId: "G-G933WX5T2B"
  };

  const app=!firebase.apps.length ?firebase.initializeApp(firebaseConfig) :firebase.app();

  const db=app.firestore();
  const auth=app.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export{db,auth,provider};