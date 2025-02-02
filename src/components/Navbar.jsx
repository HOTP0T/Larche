import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoCompassOutline, IoSearchOutline, IoJournalOutline, IoChatbubbleOutline } from 'react-icons/io5';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'nav-item active' : 'nav-item';
  };

  return (
    <nav className="navbar">
      <Link to="/discover" className={isActive('/discover')}>
        <IoCompassOutline className="nav-icon" />
        <span>Découvrir</span>
      </Link>
      <Link to="/search" className={isActive('/search')}>
        <IoSearchOutline className="nav-icon" />
        <span>Rechercher</span>
      </Link>
      <Link to="/" className={isActive('/')}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="larche-logo">
          <path d="M3 21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
          <defs>
            <linearGradient id="paint0_linear" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563eb"/>
              <stop offset="1" stopColor="#7c3aed"/>
            </linearGradient>
          </defs>
        </svg>
      </Link>
      <Link to="/journal" className={isActive('/journal')}>
        <IoJournalOutline className="nav-icon" />
        <span>Journal</span>
      </Link>
      <Link to="/messages" className={isActive('/messages')}>
        <IoChatbubbleOutline className="nav-icon" />
        <span>Messages</span>
      </Link>
    </nav>
  );
}

export default Navbar;
