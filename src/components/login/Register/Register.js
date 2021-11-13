import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Button } from 'react-bootstrap';
import './Register.css';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <div className="register">
            <h1>Please Register</h1>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
                <input name="name" onBlur={handleOnBlur} placeholder="Enter Your Name" required />
                <br />
                <input name="email" onBlur={handleOnBlur} className="mt-2" type="email" placeholder="Enter Your Email" required />
                <br />
                <input name="password" onBlur={handleOnBlur} className="mt-2" type="password" placeholder="Enter Your Password" required />
                <br />
                <input name="password2" onBlur={handleOnBlur} className="mt-2" type="password" placeholder="ReType Your Password" required />
                <br />
                <p className="text-danger"></p>
                <Button type="submit" className="mt-2" variant="dark">REGISTER</Button>
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