import React, { useState } from 'react';
import './Search.css';

const FAKE_POSTS = [
  {
    id: 1,
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    excerpt: "On ne voit bien qu'avec le cœur...",
    likes: 2345
  },
  {
    id: 2,
    title: "L'Étranger",
    author: "Albert Camus",
    excerpt: "Aujourd'hui, maman est morte...",
    likes: 1890
  },
  {
    id: 3,
    title: "Les Misérables",
    author: "Victor Hugo",
    excerpt: "Tant qu'il existera une misère sociale...",
    likes: 3421
  },
  {
    id: 4,
    title: "Madame Bovary",
    author: "Gustave Flaubert",
    excerpt: "Elle songeait quelquefois...",
    likes: 2156
  },
  {
    id: 5,
    title: "Notre-Dame de Paris",
    author: "Victor Hugo",
    excerpt: "Le Paris d'alors...",
    likes: 1678
  }
];

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="search-container">
      <div className="search-header">
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
        <h1>Rechercher</h1>
      </div>
      
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="posts-container">
        {FAKE_POSTS.map(post => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p className="author">{post.author}</p>
            <p className="excerpt">{post.excerpt}</p>
            <div className="post-footer">
              <span className="likes">♥ {post.likes}</span>
              <span className="share">↗</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
