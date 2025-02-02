import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaHeart, FaBookmark } from 'react-icons/fa';
import './Profile.css';

const mockUser = {
  name: "Sarah Anderson",
  username: "@sarahanderson",
  bio: "Digital Content Creator | Travel Enthusiast 🌎 | Photography 📸",
  stats: {
    followers: 12500,
    following: 892,
    posts: 156
  },
  posts: [
    { id: 1, imageUrl: "https://picsum.photos/300/300?random=1" },
    { id: 2, imageUrl: "https://picsum.photos/300/300?random=2" },
    { id: 3, imageUrl: "https://picsum.photos/300/300?random=3" },
    { id: 4, imageUrl: "https://picsum.photos/300/300?random=4" },
    { id: 5, imageUrl: "https://picsum.photos/300/300?random=5" },
    { id: 6, imageUrl: "https://picsum.photos/300/300?random=6" }
  ]
};

function Profile() {
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="cover-photo"></div>
        <div className="profile-info">
          <div className="profile-avatar">
            <FaUserCircle size={100} color="white" />
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
