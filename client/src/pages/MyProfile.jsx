import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Card } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
      <Card.Root backGroundColor='black' width='75%' margin='0 auto'>
        <Card.Header>
          <Card.Title>
              <div>
                <h2>Now viewing your profile.</h2>
              </div>
            </Card.Title>
        </Card.Header>
        <Card.Body>
          <div>
            <div>
              <h2>Bio</h2>
              <p>{user.bio}</p>
            </div>
            <div>
              <h2>Gamertags</h2>
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
              <h2>Your Games</h2>
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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <EditProfileModal user={user}/>
          </div>
      </Card.Root>
    </div>
  )
  
};

export default MyProfile;