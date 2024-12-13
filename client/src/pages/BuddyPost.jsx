import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { Card } from '@chakra-ui/react';
import '../styles/BuddyPost.css';

import { QUERY_SINGLE_POST } from "../utils/queries";

const BuddyPost = () => {
  const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: postId },
  });

  const post = data?.post || {};

  console.log(post);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card.Root width='75%' margin='0 auto' backgroundColor='black'>
        <Card.Body>
          {
            post.active && (
              <p style={{ color: 'red' }}>Active</p>
            )
          }
          {
            !post.active && (
              <p style={{ color: 'red' }}>No longer active</p>
            )
          }
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            <h4 style={{ width: '45%', textAlign: 'center' }}>
              Gamer:
              <Link to={`/profile/${post.author}`}>
                {post.author}
              </Link>
            </h4>
            <h5 style={{ width: '45%', textAlign: 'center' }}>
              Game: 
              <Link to={`/posts/games/${post.game}`}>
                {post.game}
              </Link>
            </h5>
            <h5 style={{ width: '45%', textAlign: 'center' }}>
              Platform: 
              <Link to={`/posts/platforms/${post.platform}`}>
                {post.platform}
              </Link>
            </h5>
            <h5 style={{ width: '45%', textAlign: 'center' }}>
              Players Needed: {post.playersNeeded}
            </h5>
          </div>
          <h4 style={{ marginTop: '20px', textAlign: 'center' }}>More Details:</h4>
          <p>{post.description}</p>
          <h5 style={{ marginTop: '20px', textAlign: 'center' }}>Date Posted: {post.date}</h5>
        </Card.Body>
      </Card.Root>
    </div>
  );
};

export default BuddyPost;
