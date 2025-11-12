import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; 



const firebaseConfig = {
  apiKey: "AIzaSyAUD-vaXewxui1HuBlxfiX8V3c3NJk6ZDE",
  authDomain: "olxcloneapp-f0d68.firebaseapp.com",
  projectId: "olxcloneapp-f0d68",
  storageBucket: "olxcloneapp-f0d68.firebasestorage.app",
  messagingSenderId: "935212521745",
  appId: "1:935212521745:web:ef7e6280d485e07bdf94b0",
  measurementId: "G-RB1P707LNT"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); 
export const storage = getStorage(app);


export default app; 