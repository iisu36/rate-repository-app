import ReviewList from './ReviewList'
import useMe from '../hooks/useMe'

const UserReviews = () => {
  const { userData } = useMe(true)

  const reviews = userData?.reviews.edges.map((edge) => edge.node)

  return <ReviewList reviews={reviews}></ReviewList>
}

export default UserReviews
