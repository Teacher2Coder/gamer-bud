import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($game: String!, $platform: String!, $description: String!, $playersNeeded: String!) {
    addPost(game: $game, platform: $platform, description: $description, playersNeeded: $playersNeeded) {
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
  mutation addGame($game: String!) {
    addGame(game: $game) {
      games
    }
  }
`;

export const REMOVE_GAME = gql`
  mutation removeGame($game: String!) {
    removeGame(game: $game) {
      games
    }
  }
`;

export const EDIT_USER = gql`
  mutation editUser($bio: String, $xboxTag: String, $psTag: String, $nintendoTag: String, $twitchTag: String, $steamTag: String, $appleTag: String, $galaxyTag: String) {
    editUser(bio: $bio, xboxTag: $xboxTag, psTag: $psTag, nintendoTag: $nintendoTag, twitchTag: $twitchTag, steamTag: $steamTag, appleTag: $appleTag, galaxyTag: $galaxyTag) {
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