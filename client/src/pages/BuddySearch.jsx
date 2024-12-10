import { useQuery } from '@apollo/client';
import PreviewPost from '../components/PreviewPost';
import { QUERY_POSTS } from '../utils/queries';
import { Container } from '@chakra-ui/react'
import BuddySearchParams from '../components/BuddySearchParams'

const BuddySearch = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  console.log(posts);

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
              title="Now displaying all posts"
            />
          )}
        </div>
      </Container>
    </main>
  )
}

export default BuddySearch;