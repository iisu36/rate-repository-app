import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'
import { useNavigate } from 'react-router-native'

const useReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW)
  const navigate = useNavigate()

  const createReview = async ({ review }) => {
    const { data } = await mutate({ variables: { review } })
    navigate(`/${data.createReview.repository.id}`)
    return { data }
  }

  return [createReview, result]
}

export default useReview
