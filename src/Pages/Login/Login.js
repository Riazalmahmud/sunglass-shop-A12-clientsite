import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import googleLogo from '../../image/icon/search.png'
const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <div className="contaiener py-5">
                <div className="from-section bg-light w-50 mx-auto shadow-lg p-3 mb-5 bg-body rounded">
                    <h3>please signIn with </h3>
                    <button className="primar-custom-color text-white fw-bold px-5 "> <img src={googleLogo} alt="" onClick={signInWithGoogle} />  signIn with google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;