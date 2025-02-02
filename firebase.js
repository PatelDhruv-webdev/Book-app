

  import { initializeApp, getApps } from 'firebase/app';
  import { getDatabase } from 'firebase/database';

  const firebaseConfig = {
    apiKey: "AIzaSyCwWv-6SF-2YIl9nQga33p91WkazmCabIk",
    authDomain: "react-native-ac10a.firebaseapp.com",
    databaseURL: "https://react-native-ac10a-default-rtdb.firebaseio.com",
    projectId: "react-native-ac10a",
    storageBucket: "react-native-ac10a.appspot.com",
    messagingSenderId: "752793488103",
    appId: "1:752793488103:web:d064445d0c797316f43042"
  };


  // Initialize Firebase app
  let app;
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0]; 
  }
  
  // Initialize Firebase Database
  const database = getDatabase(app);
  
  export { database };
  