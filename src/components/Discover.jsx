import React, { useState } from 'react';
import './Discover.css';
import FilterModal from './FilterModal';

function Discover() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  return (
    <div className="discover">
      <header className="discover-header">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="paint0_linear" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563eb"/>
                <stop offset="1" stopColor="#7c3aed"/>
              </linearGradient>
            </defs>
          </svg>
          <h1>L'arche</h1>
        </div>
        <button className="menu-button">
          <div className="menu-icon"></div>
        </button>
      </header>
      
      <main className="discover-content">
        <h2 className="content-title">Articles/Videos/Audios</h2>
      </main>

      <div className="content-controls">
        <div className="control-item">
          <span className="heart">♥</span>
          <span>10k</span>
        </div>
        <div className="control-item">
          <button 
            className="settings"
            onClick={() => setIsFilterModalOpen(true)}
          >⚙</button>
        </div>
        <div className="control-item">
          <span className="share">↗</span>
        </div>
      </div>

      <FilterModal 
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      />
    </div>
  );
}

export default Discover;
