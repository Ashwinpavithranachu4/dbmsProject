import React, { useState, useEffect } from 'react';

const PassengerProfile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    contactNumber: '',
    email: ''
  });

  useEffect(() => {
    // Fetch passenger profile data
    fetch('/api/passenger')
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = () => {
    // API call to update profile
    fetch('/api/passenger', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    }).then(() => alert('Profile updated successfully!'));
  };

  return (
    <div className="passenger-profile">
      <h1>Passenger Profile</h1>
      <div className="profile-form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={profile.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={profile.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={profile.gender}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={profile.contactNumber}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleChange}
        />
        <button onClick={updateProfile}>Update Profile</button>
      </div>
    </div>
  );
};

export default PassengerProfile;
