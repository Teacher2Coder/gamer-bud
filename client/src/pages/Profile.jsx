import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
const Profile = () => {
  const [profile, setProfile] = useState(null);
  const { data } = useQuery(QUERY_ME)
  useEffect(() => {

    setProfile({
      username: '',
      email: '',
      status: '',
      profilePicture: ''
    });
  }, []);
  const userData = data?.user;
  console.log(data)
  useEffect(() => {
    if(!userData) return
    setProfile(userData);
  }, [userData])

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