import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const isHomePage = location.pathname === '/';
  const showLogo = ['/', '/discover', '/search', '/journal'].includes(location.pathname);

  return (
    <header className="header">
      {showLogo ? (
        <div className="logo" onClick={handleLogoClick}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="paint0_linear" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563eb"/>
                <stop offset="1" stopColor="#7c3aed"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      ) : (
        <div className="back-button" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
      <div className="header-right">
        <button 
          className="profile-button" 
          onClick={handleProfileClick}
          aria-label="Profile"
        >
          <FaUserCircle size={32} />
        </button>
        <button 
          className="menu-button"
          aria-label="Menu"
        >
          <FiMenu size={20} color="white" />
        </button>
      </div>
    </header>
  );
};

export default Header;
