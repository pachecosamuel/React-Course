import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXtNyfDnDaK4J-egOTNCMmfTrRiCEZDd0",
  authDomain: "my-miniblog.firebaseapp.com",
  projectId: "my-miniblog",
  storageBucket: "my-miniblog.appspot.com",
  messagingSenderId: "819896035294",
  appId: "1:819896035294:web:c7d0b62594654692f2df4f",
  measurementId: "G-PB62QWRQH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };