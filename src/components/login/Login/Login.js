import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

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

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLoginSubmit}>
                <input name="email" onChange={handleOnChange} type="email" placeholder="Email" />
                <br />
                <input name="password" onChange={handleOnChange} className="mt-2" type="password" placeholder="Password" />
                <br />
                <button type="submit" className="mt-2">LOGIN</button>
                <br />
                <NavLink style={{ textDecoration: 'none' }} to='/register'><p className="text-primary">are you new please register</p></NavLink>
                {isLoading && <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
                {user?.email && <div className="alert alert-success" role="alert">
                    User Login successfully!
                </div>}
                {authError && <div className="alert alert-danger" role="alert">
                    {authError}
                </div>}
            </form>
        </div>
    );
};

export default Login;