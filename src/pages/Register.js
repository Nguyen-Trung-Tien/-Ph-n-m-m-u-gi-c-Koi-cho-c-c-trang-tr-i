// src/components/Register.js
import React from 'react';
import '../css/register.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý đăng ký ở đây
    };

    return (
        <div id="main">
            <Header />
            <div id="content">
                {/* Begin Register Form */}
                <div id="register-container">
                    <h2>Register</h2>
                    <form id="register-form" onSubmit={handleSubmit}>
                        <div className="form-group names-group">
                            <div className="name-field">
                                <label htmlFor="first-name">First Name</label>
                                <input placeholder="First Name" type="text" id="first-name" name="first-name" required />
                            </div>
                            <div className="name-field">
                                <label htmlFor="last-name">Last Name</label>
                                <input placeholder="Last Name" type="text" id="last-name" name="last-name" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input placeholder="Username" type="text" id="username" name="username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input placeholder="Email" type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input placeholder="Password" type="password" id="password" name="password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input placeholder="Confirm Password" type="password" id="confirm-password" name="confirm-password" required />
                        </div>
                        <button type="submit" className="submit-button">Register</button>
                    </form>
                </div>
                {/* End Register Form */}
                <Footer />
            </div>
        </div>
    );
};

export default Register;
