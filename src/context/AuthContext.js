// import { createContext, useContext, useState, useEffect } from "react";
// import { auth } from "../firebase";
// // AuthContext.js
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebase"; // Make sure you export `db` in firebase.js

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [hasPaid, setHasPaid] = useState(false);
//   const [role, setRole] = useState("user"); // default role


//   // Listen for auth state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       setUser(currentUser);
//       if (currentUser) {
//         try {
//           const docRef = doc(db, "users", currentUser.uid);
//           const docSnap = await getDoc(docRef);
//           if (docSnap.exists()) {
//             const data = docSnap.data();
//             setHasPaid(data.hasPaid || false);
//             setRole(data.role || "user");
//           } else {
//             setHasPaid(false);
//           }
//         } catch (error) {
//           console.error("Error fetching user payment status:", error);
//           setHasPaid(false);
//         }
//       } else {
//         setHasPaid(false);
//       }
//       setLoading(false);
//     });
  
//     return () => unsubscribe();
//   }, []);
  

//   const logout = () => signOut(auth);

//   return (
//     <AuthContext.Provider value={{ user, logout, hasPaid, role, loading }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({
    hasPaid: false,
    role: "user",
    access: "free",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);

      if (currentUser) {
        setUser(currentUser);
        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserData({
              hasPaid: data.hasPaid ?? false,
              role: data.role ?? "user",
              access: data.access ?? "free",
            });
          } else {
            setUserData({
              hasPaid: false,
              role: "user",
              access: "free",
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUserData({
            hasPaid: false,
            role: "user",
            access: "free",
          });
        }
      } else {
        setUser(null);
        setUserData({
          hasPaid: false,
          role: "user",
          access: "free",
        });
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        hasPaid: userData.hasPaid,
        role: userData.role,
        access: userData.access,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
