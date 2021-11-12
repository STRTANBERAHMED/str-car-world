import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }

    return (
        <div>
            <h1>Please Register</h1>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
                <input name="email" onChange={handleOnChange} type="email" placeholder="Enter Your Email" required />
                <br />
                <input name="password" onChange={handleOnChange} className="mt-2" type="password" placeholder="Enter Your Password" required />
                <br />
                <input name="password2" onChange={handleOnChange} className="mt-2" type="password" placeholder="ReType Your Password" required />
                <br />
                <p className="text-danger"></p>
                <button type="submit" className="mt-2">Register</button>
                <br /><br />
                <NavLink style={{ textDecoration: 'none' }} to='/login'><p className="text-primary">already have an account ?</p></NavLink>
            </form>}
            {isLoading && <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
            {user?.email && <div className="alert alert-success" role="alert">
                User Created successfully!
            </div>}
            {authError && <div className="alert alert-danger" role="alert">
                {authError}
            </div>}
        </div>
    );
};

export default Register;