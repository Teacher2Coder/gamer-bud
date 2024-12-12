import { Navigate, useParams } from 'react-router-dom';
import { QUERY_ME, QUERY_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import EditProfileModal from '../components/EditProfileModal';


const Profile = () => {
  
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};

  if (
    Auth.loggedIn() &&
    Auth.getProfile().authenticatedPerson.username === userParam
  ) {
    return <Navigate to='/myprofile' />
  }

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
        <h2>Now viewing {userParam ? `${user.username}'s`: `your`} profile.</h2>
      </div>
      <div>
        <p>User data will be displayed here!!!!</p>
      </div>
      <div>
        <EditProfileModal />
      </div>
    </div>
  )
  
};

export default Profile;