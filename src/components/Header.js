import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <div id="header">
            <h1 className="Home_text"><Link to="/">AUCTIONKOI</Link></h1>
            <div className="header_nav-left">
                <div className="header_nav-flex">
                    <Link to="/" className={`header_nav-items ${location.pathname === '/' ? 'active' : ''}`}>
                        <i className="fa-solid fa-house"></i>
                        <span className="header_nav-text">Home</span>
                    </Link>
                    <Link to="/auction" className={`header_nav-items ${location.pathname === '/auction' ? 'active' : ''}`}>
                        <span className="header_nav-text">Auction</span>
                    </Link>
                    <Link to="/help" className={`header_nav-items ${location.pathname === '/help' ? 'active' : ''}`}>
                        <i className="fa-regular fa-circle-question"></i>
                        <span className="header_nav-text">Help</span>
                    </Link>
                </div>
            </div>
            <div className="header_nav-right">
                <Link to="/login" className={`header_nav-items ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link>
                <Link to="/register" className={`header_nav-items ${location.pathname === '/register' ? 'active' : ''}`}>Register</Link>
            </div>
        </div>
    );
};

export default Header; // Đảm bảo xuất khẩu mặc định
