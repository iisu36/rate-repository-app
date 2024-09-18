import { useQuery } from '@apollo/client'

import { ME } from '../graphql/queries'

const useMe = (includeReviews = false) => {
  const { loading, data, refetch } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews },
  })

  const userData = data?.me?.username ? data.me : null

  return { userData, loading, refetch }
}

export default useMe
