import { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase/firebase.config';
import axios from 'axios';
   export const AuthContext = createContext(null)
   const auth = getAuth(app)
const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();


  
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
     const googleSingUp = ()=>{
    setLoading(true)
      return signInWithPopup(auth, googleProvider)
     }
     

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);

        if (currentUser) {
          axios.post('http://localhost:5000/jwt',{email:currentUser.email})
          .then(data=>{
            console.log(data.data.token);
            localStorage.setItem('access-token',data.data.token)
          })
         
        }
        else{
          localStorage.removeItem('access-token')
        }
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
      updateUser,
      googleSingUp
    };
    return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
  };

export default AuthContextProvider;