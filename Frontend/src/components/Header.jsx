import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <div className='name-logo'>
                    <img src="/assets/Bluestock Logos/logo.png" alt="Bluestock Logo" className="logo" />
                    <span className="brand-name">BLUESTOCK</span>
                </div>
                <ul className="nav-links">
                    <li><Link to="/products">PRODUCTS</Link></li>
                    <li><Link to="/pricing">PRICING</Link></li>
                    <li><Link to="/community">COMMUNITY</Link></li>
                    <li className="dropdown">
                        <span>MEDIA ▾</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/media/news">News</Link></li>
                            <li><Link to="/media/videos">Videos</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/support">SUPPORT ↗</Link></li>
                </ul>
            </div>
            <div className="nav-right">
                <Link to="/login" className="signin-link">Sign In</Link>
                <Link to="/signup" className="signup-btn">Sign Up Now</Link>
                <div className="menu-icon">⋮⋮</div>
            </div>
        </nav>
    );
};

export default Header;
