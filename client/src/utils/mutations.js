import { gql } from '@apollo/client';

export const ADD_POST = gql`
  mutation addPost($author: String!, $game: String!, $platform: String!, $description: String!, $playersNeeded: String!) {
    addPost(author: $author, game: $game, platform: $platform, description: $description, playersNeeded: $playersNeeded) {
      _id
      author
      platform
      description
      playersNeeded
      active
      date
    }
  }
`