// src/App.js
import AdminPage from './AdminPage';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/base.css';
import { getRole } from "./components/admin/RoleUser";
import Home from './pages/Home';
import AdminHome from './components/admin/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Account from './pages/Account';
import Auction from './pages/Auction';
import About from './pages/About';
import AuctionDetails from './components/AuctionDetails';
import { get } from "axios";
const App = () => {
    const [roleUser, setRoleUser] = useState(false);
    console.log(typeof getRole(), getRole())
    return (
        getRole() ? <AdminPage /> :
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/account" element={<Account />} />
                    <Route path='/auction' element={<Auction />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/auction/:id" element={<AuctionDetails />} />
                    <Route path="/admin" element={<AdminHome />} />
                </Routes>
            </Router>
    );
};

export default App;
