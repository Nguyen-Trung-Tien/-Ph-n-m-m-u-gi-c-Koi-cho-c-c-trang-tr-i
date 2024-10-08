import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <div id="header">
            <h1 className="Home_text">
                <div className="logo_koi">
                    <img src="../logo/logoKoi.png" className="koi_image"/>
                </div>
                <div className="logo_title">
                    <Link to="/">AUCTIONKOI</Link>
                </div>
            </h1>
            <div className="header_nav-left">
                <div className="header_nav-flex">
                    <Link to="/" className={`header_nav-items ${location.pathname === '/' ? 'active' : ''}`}>
                        <i className="fa-solid fa-house"></i>
                        <span className="header_nav-text">Home</span>
                    </Link>
                    <Link to="/auction"
                          className={`header_nav-items ${location.pathname.startsWith('/auction') ? 'active' : ''}`}>
                        <i className="fa-solid fa-gavel"></i>
                        <span className="header_nav-text">Auctions</span>
                    </Link>
                    <Link to="/help" className={`header_nav-items ${location.pathname === '/help' ? 'active' : ''}`}>
                        <i className="fa-regular fa-circle-question"></i>
                        <span className="header_nav-text">Help</span>
                    </Link>
                </div>
            </div>
            <div className="header_nav-right">
                <div className="header_nav-right--default">
                    <Link to="/login"
                        className={`header_nav-items ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link>
                    <Link to="/register" className={`header_nav-items ${location.pathname === '/register' ? 'active' : ''}`}>Register</Link>
                </div>
                <div className="header_nav-right--small">
                    
                </div>
            </div>
        </div>
    );
};

export default Header;
