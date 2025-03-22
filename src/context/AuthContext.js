import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
// AuthContext.js
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../firebase"; // Make sure you export `db` in firebase.js

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasPaid, setHasPaid] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setHasPaid(data.hasPaid || false);
            setIsAdmin(data.isAdmin || false);
          } else {
            setHasPaid(false);
            setIsAdmin(false);
          }
        } catch (error) {
          console.error("Error fetching user payment status:", error);
          setHasPaid(false);
          setIsAdmin(false);
        }
      } else {
        setHasPaid(false);
        setIsAdmin(false);
      }
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);
  

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, logout, hasPaid, isAdmin }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
