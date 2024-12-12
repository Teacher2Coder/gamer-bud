import { gql } from '@apollo/client'

export const QUERY_POSTS = gql`
  query allPosts {
    posts {
      _id
      author
      game
      platform
      active
      playersNeeded
      date
    }
  }
`

export const QUERY_PLATFORM_POSTS = gql`
  query platformPosts($platformKind: String!) {
    platforms(platformKind: $platformKind) {
      _id
      active
      author
      date
      description
      game
      platform
      playersNeeded
    }
  }
`

export const QUERY_GAME_POSTS = gql`
  query gamePosts($gameName: String!) {
    gamePosts(gameName: $gameName) {
      _id
      active
      author
      date
      description
      game
      platform
      playersNeeded
    }
  }
`


export const QUERY_SINGLE_POST = gql`
  query singlePost ($postId: ID!) {
    post(postId: $postId) {
      _id
      author
      game
      platform
      description
      playersNeeded
      active
      date
    }
  }
`


export const QUERY_ME = gql`
  query getUser {
    user {
    email
    password
    username
  }
  }`

export const UPDATE_ME = gql`
mutation UpdateUser($username: String!, $email: String!) {
  updateUser(username: $username, email: $email) {
    _id
    username
    email
  }
}
`

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}`