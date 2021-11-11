import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../firebase/firebaseInitialization";

firebaseInitialization();
const useFirebase = () => {
    const [user, setUser] = useState();
    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth();



    const signInWithGoogle = () => {
        signInWithPopup(auth, Googleprovider)
            .then((result) => {

            }).catch((error) => {

            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }



    return {
        user,
        signInWithGoogle,
        logOut

    }
}
export default useFirebase;