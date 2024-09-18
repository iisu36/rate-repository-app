import { View, FlatList, StyleSheet } from 'react-native'
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ReviewList = ({ reviews, repositoryInfoComponent }) => {
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={
        repositoryInfoComponent ? repositoryInfoComponent : null
      }
      ItemSeparatorComponent={ItemSeparator}
    />
  )
}

const ItemSeparator = () => <View style={styles.separator} />

export default ReviewList
