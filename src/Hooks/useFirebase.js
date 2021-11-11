import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../firebase/firebaseInitialization";

firebaseInitialization();
const useFirebase = () => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth();

    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => setIsLoading(false));
    }



    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false));
    }





    const signInWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, Googleprovider)
            .then((result) => {
                setUser(user)
            }).catch((error) => {

            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribe;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({})
        }).finally(() => setIsLoading(false))
    }



    return {
        user,
        isLoading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut

    }
}
export default useFirebase;