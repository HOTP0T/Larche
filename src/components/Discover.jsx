import React, { useState } from 'react';
import './Discover.css';
import FilterModal from './FilterModal';

function Discover() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  return (
    <div className="discover">
      <header className="discover-header">
        <div className="logo">
          <img src="/icons/larche-logo.png" alt="L'arche" />
        </div>
        <h1>Découvrir</h1>
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
