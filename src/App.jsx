import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Journal from './components/Journal';
import Discover from './components/Discover';
import Search from './components/Search';
import Messages from './components/Messages';
import MessageView from './components/MessageView';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import Earnings from './components/Earnings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="content">
              <div className="home-logo">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2563eb"/>
                      <stop offset="1" stopColor="#7c3aed"/>
                    </linearGradient>
                  </defs>
                </svg>
                <h2>L'arche</h2>
              </div>
              <div className="interaction-buttons">
                <div className="likes">
                  <span className="heart">♥</span>
                  <span>10k</span>
                </div>
                <div className="share">
                  <span>↗</span>
                </div>
              </div>
            </div>
          } />
          <Route path="/journal" element={<Journal />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/search" element={<Search />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:id" element={<MessageView />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/profile/earnings" element={<Earnings />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
