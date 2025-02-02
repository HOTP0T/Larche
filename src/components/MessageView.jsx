import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './MessageView.css';

function MessageView() {
  const navigate = useNavigate();
  const { id } = useParams();

  const mockConversation = {
    user: {
      name: 'Emma Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    messages: [
      {
        id: 1,
        type: 'received',
        text: 'Hey! How are you?',
        time: '10:30'
      },
      {
        id: 2,
        type: 'sent',
        text: "I'm good, thanks! Just finished a photoshoot.",
        time: '10:31'
      },
      {
        id: 3,
        type: 'received',
        text: 'That sounds exciting! Can I see some previews?',
        time: '10:32'
      },
      {
        id: 4,
        type: 'sent',
        text: "Of course! I'll send them over soon.",
        time: '10:33'
      }
    ]
  };

  return (
    <div className="message-view">
      <div className="message-view-header">
        <button className="back-button" onClick={() => navigate('/messages')}>
          ←
        </button>
        <div className="chat-user-info">
          <img 
            src={mockConversation.user.avatar} 
            alt={mockConversation.user.name} 
            className="chat-avatar"
          />
          <h2>{mockConversation.user.name}</h2>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 'auto', marginRight: '10px' }}>
          <path d="M3 21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
          <defs>
            <linearGradient id="paint0_linear" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563eb"/>
              <stop offset="1" stopColor="#7c3aed"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="message-content">
        {mockConversation.messages.map(message => (
          <div key={message.id} className={`message ${message.type}`}>
            <p>{message.text}</p>
            <span className="timestamp">{message.time}</span>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input type="text" placeholder="Écrivez un message..." />
        <button>Envoyer</button>
      </div>
    </div>
  );
}

export default MessageView;
