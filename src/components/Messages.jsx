import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Messages.css';

function Messages() {
  const [activeTab, setActiveTab] = useState('direct');
  
  const messages = [
    { id: 1, user: 'User 1', status: 'Nouveau message' },
    { id: 2, user: 'User 2', status: 'Envoyé' },
    { id: 3, user: 'User 3', status: 'Nouveau message' },
    { id: 4, user: 'User 4', status: 'Nouveau message' },
    { id: 5, user: 'User 5', status: 'Vue' },
    { id: 6, user: 'User 6', status: 'Nouveau message' },
    { id: 7, user: 'User 7', status: 'Vue' },
    { id: 8, user: 'User 8', status: 'Envoyé' },
  ];

  return (
    <div className="messages-container">
      <div className="messages-header">
        <h1>Messages</h1>
        <div className="tab-switcher">
          <button 
            className={`tab ${activeTab === 'direct' ? 'active' : ''}`}
            onClick={() => setActiveTab('direct')}
          >
            Direct
          </button>
          <button 
            className={`tab ${activeTab === 'groupes' ? 'active' : ''}`}
            onClick={() => setActiveTab('groupes')}
          >
            Groupes
          </button>
        </div>
      </div>
      <div className="messages-list">
        {messages.map(message => (
          <Link to={`/messages/${message.id}`} key={message.id} className="message-item">
            <div className="user-avatar">X</div>
            <div className="message-content">
              <h3>{message.user}</h3>
              <p>{message.status}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Messages;
