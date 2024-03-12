import React from "react";
import "./Profile.css"; // Імпорт CSS-файлу

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile-container"> {/* Додайте клас з CSS */}
      <div className="profile-info">
        <img src={image} alt="User avatar" className="profile-image" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className="profile-stats"> {/* Додайте клас з CSS */}
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
