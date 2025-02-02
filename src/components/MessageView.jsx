import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './MessageView.css';

function MessageView() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="message-view">
      <div className="message-view-header">
        <button className="back-button" onClick={() => navigate('/messages')}>
          ←
        </button>
        <h2>User {id}</h2>
      </div>
      <div className="message-content">
        <div className="message received">
          <p>Hello! How are you?</p>
          <span className="timestamp">10:30</span>
        </div>
        <div className="message sent">
          <p>I'm good, thanks! How about you?</p>
          <span className="timestamp">10:31</span>
        </div>
      </div>
      <div className="message-input">
        <input type="text" placeholder="Écrivez un message..." />
        <button>Envoyer</button>
      </div>
    </div>
  );
}

export default MessageView;
