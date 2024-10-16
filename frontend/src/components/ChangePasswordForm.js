import React from 'react';
import '../css/ChangePasswordForm.css';

const ChangePasswordForm = ({ currentPassword, newPassword, confirmPassword, setCurrentPassword, setNewPassword, setConfirmPassword, handleChangePassword }) => {
    return (
        <div className="change-password-container">
            <h2>Thay đổi mật khẩu</h2>
            <form onSubmit={handleChangePassword}>
                <div>
                    <label>Mật khẩu hiện tại:</label>
                    <input 
                        type="password" 
                        value={currentPassword} 
                        onChange={(e) => setCurrentPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Mật khẩu mới:</label>
                    <input 
                        type="password" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Xác nhận mật khẩu mới:</label>
                    <input 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Thay đổi mật khẩu</button>
            </form>
        </div>
    );
};

export default ChangePasswordForm;
