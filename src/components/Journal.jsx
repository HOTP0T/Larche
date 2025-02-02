import React from 'react';
import './Journal.css';

function Journal() {
  const cards = [
    { type: 'Public', likes: '10k' },
    { type: 'Abonnés', likes: '3k' },
    { type: 'Public', likes: '9k' },
    { type: 'Abonnés', likes: '12k' },
    { type: 'Public', likes: '3k' },
    { type: 'Abonnés', likes: '8k' },
    { type: 'Public', likes: '' },
    { type: 'Public', likes: '' },
    { type: 'Public', likes: '' }
  ];

  return (
    <div className="journal">
      <header className="journal-header">
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
        <h1>Journal de bord</h1>
        <div className="menu-icon">☰</div>
      </header>
      
      <div className="actions">
        <div className="action-item">
          <img src="/icons/about.png" alt="À propos" />
          <span>A propos</span>
        </div>
        <div className="action-item">
          <img src="/icons/follow.png" alt="Suivre" />
          <span>Suivre</span>
        </div>
      </div>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-type">{card.type}</div>
            {card.likes && (
              <div className="card-likes">
                <span className="heart">♥</span>
                <span>{card.likes}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journal;
