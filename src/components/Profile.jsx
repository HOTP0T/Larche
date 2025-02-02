import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaHeart, FaBookmark } from 'react-icons/fa';
import './Profile.css';

const mockUser = {
  name: "Sarah Anderson",
  username: "@sarahanderson",
  bio: "Digital Content Creator | Travel Enthusiast 🌎 | Photography 📸",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  coverPhoto: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=800&q=80",
  stats: {
    followers: 12500,
    following: 892,
    posts: 156
  },
  posts: [
    { id: 1, imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=300&h=300&q=80" },
    { id: 2, imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=300&h=300&q=80" },
    { id: 3, imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=300&h=300&q=80" },
    { id: 4, imageUrl: "https://images.unsplash.com/photo-1534534573898-db5148bc8b0c?auto=format&fit=crop&w=300&h=300&q=80" },
    { id: 5, imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=300&h=300&q=80" },
    { id: 6, imageUrl: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=300&h=300&q=80" }
  ]
};

function Profile() {
  return (
    <div className="profile">
      <div className="profile-header">
        <div 
          className="cover-photo"
          style={{ backgroundImage: `url(${mockUser.coverPhoto})` }}
        ></div>
        <div className="profile-info">
          <div className="profile-avatar">
            <img src={mockUser.avatar} alt={mockUser.name} className="avatar-image" />
            <button className="edit-avatar">
              <FaEdit /> Edit
            </button>
          </div>
          <h2>{mockUser.name}</h2>
          <p className="username">{mockUser.username}</p>
          <p className="bio">{mockUser.bio}</p>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-number">{(mockUser.stats.followers / 1000).toFixed(1)}K</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{mockUser.stats.following}</span>
          <span className="stat-label">Following</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{mockUser.stats.posts}</span>
          <span className="stat-label">Posts</span>
        </div>
      </div>

      <div className="profile-actions">
        <Link to="/profile/edit" className="action-button">Edit Profile</Link>
        <Link to="/profile/earnings" className="action-button">Earnings</Link>
      </div>

      <div className="profile-tabs">
        <div className="tab active">Posts</div>
        <div className="tab">
          <FaHeart /> Liked
        </div>
        <div className="tab">
          <FaBookmark /> Saved
        </div>
      </div>

      <div className="profile-content">
        <div className="posts-grid">
          {mockUser.posts.map((post) => (
            <div 
              key={post.id} 
              className="post-thumbnail"
              style={{ backgroundImage: `url(${post.imageUrl})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
