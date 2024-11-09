// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/base.css';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Account from './pages/Account';
import Auction from './pages/Auction';
import About from './pages/About'
import AuctionDetails from './components/AuctionDetails';
import SuccessfulAuctions from './components/SuccessfulAuctions';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/account" element={<Account />} />
                <Route path='/auction' element={<Auction/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/auction/:id" element={<AuctionDetails/>} />
                <Route path="/SuccessfulAuctions/" element={<SuccessfulAuctions/>} />

            </Routes>
        </Router>
    );
};

export default App;
