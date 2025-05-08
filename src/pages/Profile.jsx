import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Profile() {
  const [notificationsOn, setNotificationsOn] = useState(false);
  const navigate = useNavigate();

  const toggleNotifications = () => {
    setNotificationsOn(!notificationsOn);
  };

  const handleLogout = () => {
    alert("Logged out successfully.");
    navigate("/");
  };

  const handlePersonalInfo = () => {
    alert("Redirecting to edit personal information...");
  };

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <img src="/images/logo.png" alt="User Avatar" className="profile-avatar" />
      <h2 className="profile-username"><strong>User Name</strong></h2>
      <p className="profile-email">user@example.com</p>

      <h3 className="settings-title">My Account Settings</h3>
      <ul className="settings-list">
        <li onClick={handlePersonalInfo}>Personal Information</li>
        <li onClick={() => navigate("/cart")}>My Cart</li>
        <li onClick={toggleNotifications}>
          Notifications {notificationsOn ? "(On)" : "(Off)"}
        </li>
        <li onClick={handleLogout}>Log out</li>
      </ul>
    </div>
  );
}

export default Profile;
