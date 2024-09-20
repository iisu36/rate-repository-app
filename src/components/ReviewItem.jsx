import { View, StyleSheet, Pressable, Alert } from 'react-native'
import { useNavigate } from 'react-router-native'
import { format } from 'date-fns'
import useDeleteReview from '../hooks/useDeleteReview'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    backgroundColor: 'white',
    gap: 10,
  },
  container: { display: 'flex', flexDirection: 'row' },
  reviewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    gap: 4,
    paddingLeft: 16,
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 24,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ratingText: {
    //display: 'flex',
  },
  viewButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderStyle: 'solid',
    borderRadius: 2,
    padding: 4,
  },
  deleteButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRadius: 2,
    padding: 4,
    backgroundColor: theme.colors.error,
  },
  buttonText: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
  },
})

const ReviewItem = ({ review, actionButtons, refetchReviews }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText} color={'primary'} fontWeight={'bold'}>
            {review.rating}
          </Text>
        </View>
        <View style={styles.reviewContainer}>
          <Text fontWeight={'bold'}>
            {actionButtons ? review.repository.fullName : review.user.username}
          </Text>
          <Text color={'textSecondary'}>
            {format(review.createdAt, 'dd.MM.yyyy')}
          </Text>
          <Text color={'textPrimary'}>{review.text}</Text>
        </View>
      </View>
      {actionButtons && (
        <View>
          <ActionButtons
            review={review}
            refetchReviews={refetchReviews}
          ></ActionButtons>
        </View>
      )}
    </View>
  )
}

const ActionButtons = ({ review, refetchReviews }) => {
  const navigate = useNavigate()
  const [deleteReview] = useDeleteReview(refetchReviews)
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.viewButton}
        onPress={() => navigate(`/${review.repository.id}`)}
      >
        <Text style={styles.buttonText}>View repository</Text>
      </Pressable>
      <Pressable
        style={styles.deleteButton}
        onPress={() => {
          createTwoButtonAlert(() => deleteReview(review.id))
        }}
      >
        <Text style={styles.buttonText}>Delete review</Text>
      </Pressable>
    </View>
  )
}

const createTwoButtonAlert = (deleteReview) =>
  Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    { text: 'Delete', onPress: () => deleteReview() },
  ])

export default ReviewItem
