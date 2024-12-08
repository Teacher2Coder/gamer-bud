import { useQuery } from '@apollo/client';
import PreviewPost from '../components/PreviewPost';
import { QUERY_PLATFORM_POSTS } from '../utils/queries';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import BuddySearchParams from '../components/BuddySearchParams'


const BuddySearchPlatform = () => {
  
  const { platformKind } = useParams();
  
  const { loading, data } = useQuery(QUERY_PLATFORM_POSTS, {
    variables: { platformKind: platformKind }
  });
  
  const posts = data?.platforms || [];

  const title = `Now displaying all posts for the ${platformKind} platform`

  return (
    <main>
      <BuddySearchParams />
      <Container>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PreviewPost 
              posts={posts}
              title={title}
            />
          )}
        </div>
      </Container>
    </main>
  )
}

export default BuddySearchPlatform;