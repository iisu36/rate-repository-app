import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/mutations'

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER)

  const createUser = async (user) => {
    const { data } = await mutate({
      variables: { user },
    })
    return { data }
  }

  return [createUser, result]
}

export default useSignUp
