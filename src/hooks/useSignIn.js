import { useApolloClient, useMutation } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'
import { useNavigate } from 'react-router-native'

import useAuthStorage from '../hooks/useAuthStorage'

const useSignIn = () => {
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()
  const [mutate, result] = useMutation(AUTHENTICATE)
  const navigate = useNavigate()

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { data } = await mutate({ variables: { username, password } })
    await authStorage.setAccessToken(data.authenticate.accessToken)
    apolloClient.resetStore()
    navigate('/')
    return { data }
  }

  return [signIn, result]
}

export default useSignIn
