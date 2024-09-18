import { View, Text, StyleSheet } from 'react-native'
import { format } from 'date-fns'
import theme from '../theme'

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    gap: 4,
  },
  ratingContainer: {
    display: 'flex',
    paddingRight: 16,
  },
  ratingText: {
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
})

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText} color={'primary'} fontWeight={'bold'}>
          {review.rating}
        </Text>
      </View>
      <View style={styles.container}>
        <Text fontWeight={'bold'}>{review.user.username}</Text>
        <Text color={'textSecondary'}>
          {format(review.createdAt, 'dd.MM.yyyy')}
        </Text>
        <Text color={'textPrimary'}>{review.text}</Text>
      </View>
    </View>
  )
}

export default ReviewItem
