import { View, FlatList, StyleSheet } from 'react-native'
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ReviewList = ({
  reviews,
  repositoryInfoComponent,
  actionButtons = false,
  refetchReviews,
  onEndReach,
}) => {
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem
          review={item}
          actionButtons={actionButtons}
          refetchReviews={refetchReviews}
        />
      )}
      keyExtractor={({ id }) => id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.3}
      ListHeaderComponent={
        repositoryInfoComponent ? repositoryInfoComponent : null
      }
      ItemSeparatorComponent={ItemSeparator}
    />
  )
}

const ItemSeparator = () => <View style={styles.separator} />

export default ReviewList
