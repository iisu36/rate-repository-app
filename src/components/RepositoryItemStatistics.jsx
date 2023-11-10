import { StyleSheet, View } from 'react-native'
import StatisticsItem from './StatisticsItem'

const styles = StyleSheet.create({
  statisticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

const RepositoryItemStatistics = ({
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => {
  const handleCounts = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`
    }
    return count
  }

  const counts = [
    { item: stargazersCount, itemLabel: 'Stars' },
    { item: forksCount, itemLabel: 'Forks' },
    { item: reviewCount, itemLabel: 'Reviews' },
    { item: ratingAverage, itemLabel: 'Rating' },
  ]

  return (
    <View style={styles.statisticsContainer}>
      {counts.map(({ item, itemLabel }) => {
        return (
          <StatisticsItem
            key={itemLabel}
            item={handleCounts(item)}
            itemLabel={itemLabel}
          />
        )
      })}
    </View>
  )
}

export default RepositoryItemStatistics
