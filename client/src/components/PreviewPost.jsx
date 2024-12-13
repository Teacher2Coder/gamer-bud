import { Link } from 'react-router-dom';
import { Card, Button } from '@chakra-ui/react';

const PreviewPost = ({posts, title}) => {
  if (!posts.length) {
    return <h3>No posts yet</h3>
  }

  return (
    <div>
      <h3 className="text-primary" style={{ textAlign: 'center', color: 'blue' }}>{title}</h3>
      <div>
        {posts &&
          posts.map((post) => (
            <div key={post._id}>
              <Card.Root margin='10px' backgroundColor='black'>
                  <Card.Body>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                      <h4>
                        Gamer:
                        <Link to={`/profile/${post.author}`} style={{ marginLeft: '10px' }}>
                          {post.author}
                        </Link>
                      </h4>
                      <h5>
                        Game:
                        <Link to={`/posts/games/${post.game}`} style={{ marginLeft: '10px' }}>
                          {post.game}
                        </Link>
                      </h5>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                      <h5>
                        Platform: 
                        <Link to={`/posts/platforms/${post.platform}`} style={{ marginLeft: '10px' }}>
                          {post.platform}
                        </Link>
                      </h5>
                      <h5>Players Needed: {post.playersNeeded}</h5>
                    </div>
                  <h5 style={{alignSelf: 'center', marginTop: '10px'}}>Date Posted: {post.date}</h5>
                  <Link to={`/post/${post._id}`} style={{alignSelf: 'center', marginTop: '20px'}}>
                    <Button>Learn More</Button>
                  </Link>
                </Card.Body>
              </Card.Root>
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default PreviewPost;