import {createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);

    const registerUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser=>{
            setUser(currentUser);
            setLoading(false);
        }))
        return ()=>{
            unSubscribe
        }
    },[])

    const logOut = ()=>{
        return signOut(auth)
    }
    const authValue = {
      user,
      registerUser,
      logOut
    };
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;