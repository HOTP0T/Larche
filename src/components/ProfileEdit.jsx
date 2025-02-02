import React from 'react';
import './ProfileEdit.css';

function ProfileEdit() {
  return (
    <div className="profile-edit">
      <header className="edit-header">
        <button className="back-button">←</button>
        <h2>Edit Profile</h2>
        <button className="save-button">Save</button>
      </header>

      <div className="edit-form">
        <div className="form-group">
          <label>Profile Photo</label>
          <div className="avatar-edit">
            <img src="/default-avatar.png" alt="Profile" />
            <button>Change Photo</button>
          </div>
        </div>

        <div className="form-group">
          <label>Name</label>
          <input type="text" defaultValue="John Doe" />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input type="text" defaultValue="@johndoe" />
        </div>

        <div className="form-group">
          <label>Bio</label>
          <textarea defaultValue="Digital Creator | Content Producer"></textarea>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" defaultValue="john@example.com" />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="tel" defaultValue="+1 234 567 890" />
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
