import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          description
          forksCount
          fullName
          language
          ownerAvatarUrl
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`
export const ME = gql`
  query {
    me {
      username
    }
  }
`

export const GET_SINGLE_REPOSITORY = gql`
  query GetSingleRepository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      url
      description
      forksCount
      fullName
      language
      ownerAvatarUrl
      ratingAverage
      reviewCount
      stargazersCount
    }
  }
`
