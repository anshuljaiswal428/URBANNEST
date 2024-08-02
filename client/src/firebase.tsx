// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbKhsKMsHljkDdmkS3Kpx59Vgdgy2ihwA",
  authDomain: "urban-nest-427919.firebaseapp.com",
  databaseURL: "https://urban-nest-427919-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "urban-nest-427919",
  storageBucket: "urban-nest-427919.appspot.com",
  messagingSenderId: "42934078737",
  appId: "1:42934078737:web:c6ddb3b408b8570d2cd0b0",
  measurementId: "G-V7SZGX153X"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
