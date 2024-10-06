// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/users'; //
export const registerUser = async (userData) => {
    const response = await fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        throw new Error('Đăng ký không thành công');
    }

    return response.json();
};


export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data; 
    }
};

