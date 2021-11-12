import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import googleLogo from '../../image/icon/search.png'
import { Alert, CircularProgress, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'


const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { signInWithGoogle, loginUser, user, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <div className="contaiener py-5">
                <div className="from-section bg-light w-50 mx-auto shadow-lg p-3 mb-5 bg-body rounded">
                    <Typography variant="button" display="block" gutterBottom>
                        Login Now
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>
                    <button className="primar-custom-color text-white fw-bold px-5 login-design"> <img src={googleLogo} alt="" onClick={handleGoogleSignIn} />  signIn with google</button>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">logIn success !</Alert>}
                </div>

            </div>
        </div>
    );
};

export default Login;