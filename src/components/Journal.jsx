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
          <img src="/icons/logo.png" alt="L'arche" className="logo-img" />
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
