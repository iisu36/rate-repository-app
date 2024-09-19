import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $after: String
    $first: Int
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      after: $after
      first: $first
    ) {
      totalCount
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
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`
export const ME = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
            repository {
              id
            }
          }
        }
      }
    }
  }
`

export const GET_SINGLE_REPOSITORY = gql`
  query GetSingleRepository($repositoryId: ID!, $first: Int, $after: String) {
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
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`
