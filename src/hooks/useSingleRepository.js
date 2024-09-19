import { useQuery } from '@apollo/client'

import { GET_SINGLE_REPOSITORY } from '../graphql/queries'

const useSingleRepository = ({ repositoryId, first }) => {
  const { loading, data, refetch, fetchMore } = useQuery(
    GET_SINGLE_REPOSITORY,
    {
      variables: { repositoryId, first },
      fetchPolicy: 'cache-and-network',
    }
  )

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        variables: { repositoryId },
        after: data.repository.reviews.pageInfo.endCursor,
        first,
      },
    })
  }

  const repository = data?.repository

  return { repository, loading, refetch, fetchMore: handleFetchMore }
}

export default useSingleRepository
