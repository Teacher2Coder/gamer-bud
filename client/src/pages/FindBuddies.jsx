import BuddyForm from '../components/BuddyForm';
import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';

const FindBuddies = () => {

  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || {};

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