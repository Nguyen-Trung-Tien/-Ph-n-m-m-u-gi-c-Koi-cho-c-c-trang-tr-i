// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/register.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        setError('');
    
        if (password !== confirmPassword) {
            setError('Mật khẩu và xác nhận mật khẩu không giống nhau.');
            return;
        }
        
        const userData = { username, password, firstName, lastName, email, phoneNumber};
        console.log('Gửi dữ liệu đăng ký:', userData);
    
        fetch('http://localhost:8080/auction/users/register', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Tài khoản đã được đăng kí');
            }
            return response.json();
        })
        .then(data => {
            console.log('Tạo tài khoản thành công:', data);
            alert('Bạn đã tạo tài khoản thành công!');
            navigate('/login'); 
        })
        .catch(error => {
            console.error('Lỗi:', error);
            setError('Lỗi trong quá trình tạo tài khoản: ' + error.message);
        });
    };

    

    return (
        <div id="main">
            <Header />
            <div id="content">
                {/* Begin Register Form */}
                <div id="register-container">
                    <h2>Register</h2>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <form id="register-form" onSubmit={handleRegister}>
                        <div className="form-group names-group">
                            <div className="name-field">
                                <label htmlFor="first-name">Họ</label>
                                <input
                                    placeholder="Họ"
                                    type="text"
                                    id="first-name"
                                    name="first-name"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="name-field">
                                <label htmlFor="last-name">Tên</label>
                                <input
                                    placeholder="Tên"
                                    type="text"
                                    id="last-name"
                                    name="last-name"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Tên Đăng Nhập</label>
                            <input
                                placeholder="Tên Đăng Nhập"
                                type="text"
                                id="username"
                                name="username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                placeholder="Email"
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                pattern="[0-9]*"
                                placeholder="Phone"
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mật Khẩu</label>
                            <input
                                placeholder="Mật Khẩu"
                                type="password"
                                id="password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Xác Nhận Mật Khẩu</label>
                            <input
                                placeholder="Xác Nhận Mật Khẩu"
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="submit-button">Đăng Ký</button>
                    </form>
                </div>
                {/* End Register Form */}
                <Footer />
            </div>
        </div>
    );
};

export default Register;
