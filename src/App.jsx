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
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <div className="content">
                <div className="likes">
                  <span className="heart">♥</span>
                  <span>10k</span>
                </div>
                <div className="share">
                  <span>↗</span>
                </div>
              </div>
            </>
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
