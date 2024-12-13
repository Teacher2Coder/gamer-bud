import { useParams } from 'react-router-dom';
import { QUERY_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';


const Profile = () => {
  
  const { userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam }
  });

  const user = data?.user || {};

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <div>
        <h2>Now viewing {user.username}'s profile.</h2>
      </div>
      <div>
        <div>
          <h2>{user.username}'s Bio</h2>
          {
            !user.bio ? (
              <p>No bio yet</p>
            ) : (
              <p>{user.bio}</p>
            )
          }
        </div>
        <div>
          <h2>{user.username}'s Gamertags</h2>
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
          <h2>{user.username}'s' Games</h2>
          {
            user.games.map((game) => (
              <div key={game}>
                <p>{game}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default Profile;