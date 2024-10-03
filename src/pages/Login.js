// src/components/Login.js
import React, { useState } from 'react';
import '../css/login.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <div id="main">
            <Header />
            <div id="content">
                {/* Begin Login Form */}
                <div id="login-container">
                    <h2>Login</h2>
                    <form id="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input placeholder="Username" type="text" id="username" name="username" required />
                        </div>
                        <div className="form-group password-container">
                            <label htmlFor="password">Password</label>
                            <input
                                placeholder="Password"
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                name="password"
                                required
                            />
                            <button type="button" onClick={togglePassword}>
                                <i id="toggleIcon" className={`fa-regular ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                        <a href="#" className="forget-password">Forgot Password?</a>
                        <button type="submit" className="submit-button">Login</button>
                    </form>
                </div>
                {/* End Login Form */}
                <Footer />
            </div>
        </div>
    );
};

export default Login;
