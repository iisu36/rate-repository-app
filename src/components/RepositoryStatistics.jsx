import { FlatList, StyleSheet } from 'react-native'
import RepoStatItem from './RepoStatItem'

const styles = StyleSheet.create({
  statWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

const RepositoryStatistics = ({ item }) => {
  const statItems = [
    {
      label: 'Stars',
      value: convertToThousandsK(item.stargazersCount),
    },
    {
      label: 'Forks',
      value: convertToThousandsK(item.forksCount),
    },
    {
      label: 'Reviews',
      value: item.reviewCount,
    },
    {
      label: 'Rating',
      value: item.ratingAverage,
    },
  ]

  return (
    <FlatList
      style={styles.statWrapper}
      data={statItems}
      keyExtractor={(item) => item.label}
      renderItem={({ item }) => (
        <RepoStatItem label={item.label}>{item.value}</RepoStatItem>
      )}
    />
  )
}

const convertToThousandsK = (value) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`
  }
  return value
}

export default RepositoryStatistics
