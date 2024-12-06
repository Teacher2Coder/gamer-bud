import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

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
      <h4>Gamer: {post.author}</h4>
      <h5>Game: {post.game}</h5>
      <h5>Platform: {post.platform}</h5>
      <h5>Players Needed: {post.playersNeeded}</h5>
      <h4>More Details:</h4>
      <p>{post.description}</p>
      <h5>Date Posted: {post.date}</h5>
    </div>
  );
};

export default BuddyPost;
