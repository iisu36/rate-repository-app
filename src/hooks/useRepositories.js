import { useQuery } from '@apollo/client'

import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ orderBy, orderDirection, searchKeyword, first }) => {
  const { loading, data, refetch, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
      orderDirection,
      searchKeyword,
      first,
    },
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderBy,
        orderDirection,
        searchKeyword,
        first,
      },
    })
  }

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    refetch,
  }
}

export default useRepositories
