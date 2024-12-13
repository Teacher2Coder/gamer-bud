import { useParams, Link } from 'react-router-dom';
import { QUERY_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Card } from '@chakra-ui/react';


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
      <Card.Root backGroundColor='black' width='75%' margin='0 auto'>
        <Card.Header>
          <Card.Title>
              <div>
                <h2>Now viewing {user.username}'s profile.</h2>
              </div>
            </Card.Title>
        </Card.Header>
        <Card.Body>
          <div>
            <div>
              <h2>{user.username}'s Bio</h2>
              <p>{user.bio}</p>
            </div>
            <div>
              <h2>{user.username}'s Gamertags</h2>
              <div style={{marginTop: '10px'}}>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                  <p>Xbox: {user.xboxTag}</p>
                  <p>PSN: {user.psTag}</p>
                  <p>Nintendo: {user.nintendoTag}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                  <p>Twitch: {user.twitchTag}</p>
                  <p>Steam: {user.steamTag}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                  <p>iOS: {user.appleTag}</p>
                  <p>Android: {user.galaxyTag}</p>
                </div>
              </div>
            </div>
            <div>
              <h2>{user.username}'s Games</h2>
              {
                user.games.map((game) => (
                  <div key={game}>
                    <Link to={`posts/games/${game}`}>
                      <p>{game}</p>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </Card.Body>
      </Card.Root>
    </div>
  )
};

export default Profile;