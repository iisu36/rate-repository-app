import { useQuery } from '@apollo/client'

import { GET_SINGLE_REPOSITORY } from '../graphql/queries'

const useSingleRepository = (repositoryId) => {
  const { loading, data, refetch } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { repositoryId },
    fetchPolicy: 'cache-and-network',
  })

  const repository = data?.repository

  return { repository, loading, refetch }
}

export default useSingleRepository
