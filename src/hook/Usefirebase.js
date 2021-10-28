import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, GoogleAuthProvider, getAuth, signInWithPopup, signOut, } from "firebase/auth";
import authorizeInialization from '../Firebase/Firebase.init';
authorizeInialization();
const Usefirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setEroor] = useState('');

    const SignInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();



        signInWithPopup(auth, googleProvider)
            .then((result) => {



                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch((error) => {


                const errorMessage = error.message;

                console.log(errorMessage);
            })
            .finally(() => setIsLoading(false))



    }

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            setIsLoading(true);
            setUser({})
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    //observer user state change
    useEffect(() => {
        const auth = getAuth();
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed; //for performance issue

    }, [])

    return {
        user,
        setUser,
        error,
        isLoading,
        SignInWithGoogle,
        logOut,
        setEroor,
    }


};

export default Usefirebase;