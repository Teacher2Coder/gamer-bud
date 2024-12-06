import { Link } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

const PreviewPost = ({posts, title}) => {
  if (!posts.length) {
    return <h3>No posts yet</h3>
  }

  console.log(posts);

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div>
        {posts &&
          posts.map((post) => (
            <div key={post._id}>
              <Container>
                <h4>Gamer: {post.author}</h4>
                <h5>Game: {post.game}</h5>
                <h5>Platform: {post.platform}</h5>
                <h5>Players Needed: {post.playersNeeded}</h5>
                <h5>Date Posted: {post.date}</h5>
                <Link to={`/post/${post._id}`}>
                  Learn More
                </Link>
              </Container>
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default PreviewPost;