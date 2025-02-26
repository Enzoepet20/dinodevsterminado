import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDter6Tg90U99EUNlcckdO1yGTUY4v3KIc",
  authDomain: "dinodevs-f1a63.firebaseapp.com",
  projectId: "dinodevs-f1a63",
  storageBucket: "dinodevs-f1a63.firebasestorage.app",
  messagingSenderId: "378528115119",
  appId: "1:378528115119:web:ed92ff296b3e4d6722675a",
  measurementId: "G-TR1ZD4Y118"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // Exportamos solo `auth`
