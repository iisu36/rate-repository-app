import { useQuery } from '@apollo/client'

import { ME } from '../graphql/queries'

const useMe = () => {
  const { loading, data, refetch } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
  })

  const username = data?.me?.username

  return { username, loading, refetch }
}

export default useMe
