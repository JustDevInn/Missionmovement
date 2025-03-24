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
  const [role, setRole] = useState("user"); // default role


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
            setRole(data.role || "user");
          } else {
            setHasPaid(false);
          }
        } catch (error) {
          console.error("Error fetching user payment status:", error);
          setHasPaid(false);
        }
      } else {
        setHasPaid(false);
      }
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);
  

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, logout, hasPaid, role }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
