import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // API FETCH 
    setProfile({
      username: 'Le subject',
      email: 'Le email',
      status: 'Le Status.',
      profilePicture: '#'
    });
  }, []);

  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/editprofile');
  };

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h1>{profile.username}</h1>
      <img 
        src={profile.profilePicture} 
        className="profile-picture"
        style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover',
            margin: '20px',
          }}
      />
      <p>Email: {profile.email}</p>
      <p>Status: {profile.status}</p>
      <button onClick={handleEditProfile}>Edit Profile</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Profile;