// src/components/Login.js
import React, { useState } from 'react';
import '../css/login.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
    
        fetch('http://localhost:8080/auction/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "successful") {
                console.log('Đăng nhập thành công:', data.user);
                // Chuyển hướng hoặc thực hiện hành động khác sau khi đăng nhập thành công
            } else {
                console.error('Đăng nhập thất bại:', data.message);
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Lỗi:', error);
            alert('Đã xảy ra lỗi, vui lòng thử lại sau!');
        });
    };
    
    

    return (
        <div id="main">
            <Header />
            <div id="content">
                {/* Begin Login Form */}
                <div id="login-container">
                    <h2>Login</h2>
                    <form id="login-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                placeholder="Username"
                                type="text"
                                id="username"
                                name="username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group password-container">
                            <label htmlFor="password">Password</label>
                            <input
                                placeholder="Password"
                                type="password"
                                id="password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
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
