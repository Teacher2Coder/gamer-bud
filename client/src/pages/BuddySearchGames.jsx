import { useQuery } from '@apollo/client';
import PreviewPost from '../components/PreviewPost';
import { QUERY_GAME_POSTS } from '../utils/queries';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import BuddySearchParams from '../components/BuddySearchParams'


const BuddySearchGame = () => {
  
  const { gameName } = useParams();
  
  const { loading, data } = useQuery(QUERY_GAME_POSTS, {
    variables: { gameName: gameName }
  });
  
  const posts = data?.gamePosts || [];

  const title = `Now displaying all posts for ${gameName}`

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

export default BuddySearchGame;