import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UpdateProfileForm from '../components/UpdateProfileForm';
import ChangePasswordForm from '../components/ChangePasswordForm';

import '../css/account.css';

const Account = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});
    const [email, setEmail] = useState(user.email || '');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState(user.firstName || '');
    const [lastName, setLastName] = useState(user.lastName || '');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [activeTab, setActiveTab] = useState('profile');

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
            setEmail(storedUser.email);
            setFirstName(storedUser.firstName);
            setLastName(storedUser.lastName);
            setPhoneNumber(storedUser.phoneNumber || '');
        }
    }, []);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/auction/users/update/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                id: user.id,
                email, 
                firstName, 
                lastName,
                phoneNumber
            }),
        })
        .then(response => response.json())
        .then(data => {
            const updatedUser = { ...user, email, firstName, lastName, phoneNumber};
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser); 
            alert('Cập nhật thành công');
            window.location.reload();
        })
        .catch(error => {
            console.error('Lỗi:', error);
            alert('Đã xảy ra lỗi, vui lòng thử lại sau!');
        });
    };

    const handleChangePassword = (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert('Mật khẩu mới và xác nhận mật khẩu không khớp');
            return;
        }

        fetch('http://localhost:8080/auction/users/change-password', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: user.id,
                currentPassword,
                newPassword
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "successful") {
                console.log('Mật khẩu đã được thay đổi');
                alert('Mật khẩu đã được thay đổi thành công');
                window.location.reload();
            } else if (data.message === "duplicate") {
                console.log('Mật khẩu mới trùng mật khẩu cũ')
                alert('Mật khẩu mới trùng mật khẩu cũ');

            }
             else {
                console.error('Thay đổi mật khẩu thất bại:', data.message);
                alert('Thay đổi mật khẩu thất bại');
            }
        })
        .catch(error => {
            console.error('Lỗi:', error);
            alert('Đã xảy ra lỗi, vui lòng thử lại sau!');
        });
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div id="main">
            <Header/>
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-19">
                            <div className="col-3">
                                <nav className="nav flex-column">
                                    <a 
                                        className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`} 
                                        href="#" 
                                        onClick={() => handleTabClick('profile')}
                                    >
                                        Thông tin tài khoản
                                    </a>
                                    <a 
                                        className={`nav-link ${activeTab === 'password' ? 'active' : ''}`} 
                                        href="#" 
                                        onClick={() => handleTabClick('password')}
                                    >
                                        Thay đổi mật khẩu
                                    </a>
                                </nav>
                            </div>
                            {activeTab === 'profile' && (
                                <UpdateProfileForm 
                                    email={email}
                                    phoneNumber={phoneNumber}
                                    firstName={firstName} 
                                    lastName={lastName} 
                                    setEmail={setEmail}     
                                    setPhoneNumber={setPhoneNumber}
                                    setFirstName={setFirstName} 
                                    setLastName={setLastName} 
                                    handleUpdateProfile={handleUpdateProfile} 
                                />
                            )}
                            {activeTab === 'password' && (
                                <ChangePasswordForm 
                                    currentPassword={currentPassword} 
                                    newPassword={newPassword} 
                                    confirmPassword={confirmPassword} 
                                    setCurrentPassword={setCurrentPassword} 
                                    setNewPassword={setNewPassword} 
                                    setConfirmPassword={setConfirmPassword} 
                                    handleChangePassword={handleChangePassword} 
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Account;
