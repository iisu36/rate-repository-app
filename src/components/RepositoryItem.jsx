import { StyleSheet, View } from 'react-native'
import RepositoryDescription from './RepositoryDescription'
import RepositoryStatistics from './RepositoryStatistics'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 16,
    backgroundColor: 'white',
  },
})

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <RepositoryDescription item={item} />
      <RepositoryStatistics item={item} />
    </View>
  )
}

export default RepositoryItem
