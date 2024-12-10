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

export const ADD_GAME = gql`
  mutation addGame($userId: ID!, $game: String!) {
    addGame(userId: $userId, game: $game) {
      games
    }
  }
`

export const REMOVE_GAME =gql`
  mutation removeGame($userId: ID!, $game: String!) {
    removeGame(userId: $userId, game: $game) {
      games
    }
  }
`