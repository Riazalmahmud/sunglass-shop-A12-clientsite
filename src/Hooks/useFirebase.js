import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../firebase/firebaseInitialization";

firebaseInitialization();
const useFirebase = () => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth();

    const registerUser = (email, password, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }



    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }





    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, Googleprovider)
            .then((result) => {

                setUser(user)
                const destination = location?.state?.from || '/';
                history.replace(destination);

            }).catch((error) => {
                setAuthError(error.message);
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