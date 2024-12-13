import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

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
`;

export const ADD_GAME = gql`
  mutation addGame($userId: ID!, $game: String!) {
    addGame(userId: $userId, game: $game) {
      games
    }
  }
`;

export const REMOVE_GAME = gql`
  mutation removeGame($userId: ID!, $game: String!) {
    removeGame(userId: $userId, game: $game) {
      games
    }
  }
`;

export const EDIT_USER = gql`
  mutation editUser($bio: String!, $xboxtag: String!, $psTag: String!, $nintendoTag: String!, $twitchTag: String!, $steamTag: String!, $appleTag: String!, $galaxyTag: String!) {
    editUser(bio: $bio, xboxTag: $xboxTag, psTag: $psTag, nintendoTag: $nintendoTag, twitchTag: $twitchTag, appleTag: $appleTag, galaxyTag: $galaxyTag) {
      bio
      xboxTag
      psTag
      nintendoTag
      twitchTag
      steamTag
      appleTag
      galaxyTag
    }
  }
`;