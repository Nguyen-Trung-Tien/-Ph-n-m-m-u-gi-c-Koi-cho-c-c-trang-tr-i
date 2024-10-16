import React from 'react';
import '../css/UpdateProfileForm.css';

const UpdateProfileForm = ({ email, phoneNumber, firstName, lastName, setEmail, setFirstName, setLastName,setPhoneNumber, handleUpdateProfile }) => {
    return (
        <div className="update-profile-form">
            <h2>Thông tin tài khoản</h2>
            <form onSubmit={handleUpdateProfile}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input 
                        type="tel" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Cập nhật thông tin</button>
            </form>
        </div>
    );
};

export default UpdateProfileForm;
