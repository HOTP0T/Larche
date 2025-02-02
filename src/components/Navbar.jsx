import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'nav-item active' : 'nav-item';
  };

  return (
    <nav className="navbar">
      <Link to="/discover" className={isActive('/discover')}>
        <img src="/icons/discover.png" alt="Découvrir" />
        <span>Découvrir</span>
      </Link>
      <Link to="/search" className={isActive('/search')}>
        <img src="/icons/search.png" alt="Rechercher" />
        <span>Rechercher</span>
      </Link>
      <Link to="/" className={isActive('/')}>
        <img src="/icons/larche.png" alt="L'arche" className="larche-logo" />
      </Link>
      <Link to="/journal" className={isActive('/journal')}>
        <img src="/icons/journal.png" alt="Journal" />
        <span>Journal</span>
      </Link>
      <Link to="/messages" className={isActive('/messages')}>
        <img src="/icons/messages.png" alt="Messages" />
        <span>Messages</span>
      </Link>
    </nav>
  );
}

export default Navbar;
