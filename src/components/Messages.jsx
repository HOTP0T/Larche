import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Messages.css';

function Messages() {
  const [activeTab, setActiveTab] = useState('direct');
  
  const messages = [
    { 
      id: 1, 
      user: 'Emma Wilson', 
      status: 'Nouveau message',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      lastMessage: "Hey! Are you available tomorrow?"
    },
    { 
      id: 2, 
      user: 'James Miller', 
      status: 'Envoyé',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      lastMessage: "The photos look amazing!"
    },
    { 
      id: 3, 
      user: 'Sophie Turner', 
      status: 'Nouveau message',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      lastMessage: "Let's meet for coffee"
    },
    { 
      id: 4, 
      user: 'Michael Chen', 
      status: 'Nouveau message',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      lastMessage: "Thanks for the feedback!"
    },
    { 
      id: 5, 
      user: 'Laura Martinez', 
      status: 'Vue',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      lastMessage: "Perfect, see you then!"
    }
  ];

  return (
    <div className="messages-container">
      <div className="messages-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="paint0_linear" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563eb"/>
                <stop offset="1" stopColor="#7c3aed"/>
              </linearGradient>
            </defs>
          </svg>
          <h1>Messages</h1>
        </div>
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
            <div className="user-avatar">
              <img src={message.avatar} alt={message.user} />
            </div>
            <div className="message-content">
              <h3>{message.user}</h3>
              <p className="last-message">{message.lastMessage}</p>
              <span className="message-status">{message.status}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Messages;
