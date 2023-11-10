import { StyleSheet, View } from 'react-native'
import RepositoryItemInfo from './RepositoryItemInfo'
import RepositoryItemStatistics from './RepositoryItemStatistics'

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 1,
    backgroundColor: 'white',
  },
})

const RepositoryItem = ({
  item: {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  },
}) => {
  return (
    <View style={styles.container}>
      <RepositoryItemInfo
        fullName={fullName}
        description={description}
        language={language}
        ownerAvatarUrl={ownerAvatarUrl}
      />
      <RepositoryItemStatistics
        forksCount={forksCount}
        stargazersCount={stargazersCount}
        ratingAverage={ratingAverage}
        reviewCount={reviewCount}
      />
    </View>
  )
}

export default RepositoryItem
