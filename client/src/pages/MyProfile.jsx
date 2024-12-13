import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import EditProfileModal from '../components/EditProfileModal';


const MyProfile = () => {

  const { loading, data } = useQuery(QUERY_ME);

  const user = data?.me || {};

  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }

  if (!user?.username) {
    return (
      <h2>
        You need to be logged in to see this!
      </h2>
    )
  }

  return (
    <div>
      <div>
        <h2>Now viewing your profile.</h2>
      </div>
      <div>
        <div>
          <h2>Bio</h2>
          <p>{user.bio}</p>
        </div>
        <div>
          <h2>Gamertags</h2>
          <div>
            <p>Xbox: {user.xboxTag}</p>
            <p>PSN: {user.psTag}</p>
            <p>Nintendo: {user.nintendoTag}</p>
            <p>Twitch: {user.twitchTag}</p>
            <p>Steam: {user.steamTag}</p>
            <p>iOS: {user.appleTag}</p>
            <p>Android: {user.galaxyTag}</p>
          </div>
        </div>
        <div>
          <h2>Your Games</h2>
          {
            user.games.map((game) => (
              <div key={game}>
                <p>{game}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <EditProfileModal user={user}/>
      </div>
    </div>
  )
  
};

export default MyProfile;