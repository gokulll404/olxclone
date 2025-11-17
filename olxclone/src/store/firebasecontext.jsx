import { createContext, useEffect, useState } from "react";
import {signInWithEmailAndPassword,signOut,onAuthStateChanged,} from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext(null);

export function FirebaseContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null); // Firestore user details


  // Listen to Firebase Login/Logout State
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);

    if (currentUser) {
      try {
        const ref = doc(db, "users", currentUser.uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setUserData(snap.data());
        } else {
          setUserData(null);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    } else {
      setUserData(null);
    }
  });

    return () => unsubscribe();
  }, []);

  // Login Function
  const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password, );
  };

  // Logout Function
  const logout = async () => {
    await signOut(auth);
    setUser(null); // optional (Firebase will also trigger state change)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,setUser,userData }}>
      {children}
    </AuthContext.Provider>
  );
}
