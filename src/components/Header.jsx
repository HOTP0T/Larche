import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>L'arche</h1>
      </div>
      <div className="header-right">
        <div className="profile-icon" onClick={handleProfileClick}>
          <FaUserCircle size={32} />
        </div>
        <div className="menu-icon">
          <FiMenu size={20} color="white" />
        </div>
      </div>
    </header>
  );
}

export default Header;
