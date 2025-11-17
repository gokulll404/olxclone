// src/context/PostsContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // initial fetch or realtime listener
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const arr = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(arr);
      setLoading(false);
    }, (err) => {
      console.error("posts listener error", err);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts, loading }}>
      {children}
    </PostsContext.Provider>
  );
};
