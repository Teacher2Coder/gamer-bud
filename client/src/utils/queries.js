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

export const QUERY_SINGLE_POST = gql`
  query singlePost ($postId: ID!) {
    post {
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