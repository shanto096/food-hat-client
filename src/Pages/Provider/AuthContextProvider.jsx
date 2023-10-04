import { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase/firebase.config';
   export const AuthContext = createContext(null)
   const auth = getAuth(app)
const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createRegister = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const createLogin = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logOut = () => {
      return signOut(auth);
    };
      const updateUser = (name, photoUrl)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
          displayName: name ,
          photoURL: photoUrl

        })

      }
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        return unsubscribe();
      };
    }, []);
  
    const info = {
      user,
      loading,
      createRegister,
      createLogin,
      logOut,
      updateUser
    };
    return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
  };

export default AuthContextProvider;