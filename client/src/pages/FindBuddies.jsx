import BuddyForm from '../components/BuddyForm';
import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Card, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const FindBuddies = () => {

  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || {};

  if (!Auth.loggedIn()) {
    return (
      <div>
        <Card.Root>
          <Card.Body>
            <div>
              <p>You must be logged in to make a post!</p>
              <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap' }}>
                <Link to='/login'>
                  <Button>
                    Go to Login
                  </Button>
                  </Link>
                <Link to='/signup'>
                  <Button>
                    Go to Signup
                  </Button>
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card.Root>
      </div>
    )
  }

  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }

  return (
    <div>
      <h2>Need a GamerBud? Fill out the form?</h2>
      <BuddyForm user={user}/>
    </div>
  )
}

export default FindBuddies;