import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext/UserContext';

const Header = () => {
    const location = useLocation();
    const [showOptions, setShowOptions] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const { user, setUser } = useUser();

    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
        setUser(null); 
        navigate('/'); 
    };

    const toggleOptions = () => {
        setShowOptions(!showOptions); 
    };

    const changeMenu = () => {
        setShowMenu(!showMenu);
    };

    const outSideMove = (e) => {
        setShowMenu(false);
    };

    return (
        <div id="header">
            <h1 className="Home_text">
                <div className="logo_koi">
                    <img src="../logo/logoKoi.png" className="koi_image" alt="Koi Logo"/>
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
                    <Link to="/auction" className={`header_nav-items ${location.pathname.startsWith('/auction') ? 'active' : ''}`}>
                        <i className="fa-solid fa-gavel"></i>
                        <span className="header_nav-text">Auctions</span>
                    </Link>
                    <Link to="/about" className={`header_nav-items ${location.pathname === '/about' ? 'active' : ''}`}>
                        <i className="fa-regular fa-circle-question"></i>
                        <span className="header_nav-text">About</span>
                    </Link>
                </div>
            </div>
            <div className="header_nav-right">
                {isAuthenticated ? (
                    <>
                        <div className="header_nav-name_frame" onClick={toggleOptions}>
                            <span className="header_nav-name">Welcome, {user?.firstName} {user?.lastName} (Còn {user?.wallet}$)</span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        {showOptions && ( 
                            <nav className={`header_nav-name_option ${showOptions ? 'show' : ''}`}>
                                <ul>
                                    <li>
                                        <Link to="../account" className='btn btn-account'>Account</Link>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout} className="btn btn-account">Logout</button>
                                    </li>
                                </ul>
                            </nav>
                        )}
                    </>
                ) : (
                    <>
                        <div className={`header_nav-right--hamburger-menu ${showMenu ? 'active':''}`} onClick={changeMenu} onMouseLeave={outSideMove}>
                            <span></span>
                            <span></span>
                            <span></span>
                            {showMenu && (
                                <div className="header_nav-right--hamburger-menu_box">
                                    <div className="header_nav-right--hamburger-menu_box--arrow"></div>
                                    <Link to="/login" className={`header_nav-items ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link>
                                    <Link to="/register" className={`header_nav-items ${location.pathname === '/register' ? 'active' : ''}`}>Register</Link>
                                </div>
                            )}
                        </div>
                        <div className='header_nav-right--default'>
                            <Link to="/login" className={`header_nav-items ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link>
                            <Link to="/register" className={`header_nav-items ${location.pathname === '/register' ? 'active' : ''}`}>Register</Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
