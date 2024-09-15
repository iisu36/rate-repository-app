import { StyleSheet, View } from 'react-native'
import RepositoryDescription from './RepositoryDescription'
import RepositoryStatistics from './RepositoryStatistics'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 10,
  },
})

const RepositoryItem = ({ item, button = null }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      <RepositoryDescription item={item} />
      <RepositoryStatistics item={item} />
      {button ? button : null}
    </View>
  )
}

export default RepositoryItem
