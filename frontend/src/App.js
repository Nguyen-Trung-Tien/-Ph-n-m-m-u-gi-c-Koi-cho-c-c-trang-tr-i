// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Account from './pages/Account';
import Auction from './pages/Auction';
import AuctionDetail from './components/AuctionDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/account" element={<Account />} />
                <Route path='/auction' element={<Auction/>}/>
                <Route path='/auctiondetail' element={<AuctionDetail/>}/>

                {/*<Route path="/auction/:id" element={<AuctionDetail />} />*/}
            </Routes>
        </Router>
    );
};

export default App;
