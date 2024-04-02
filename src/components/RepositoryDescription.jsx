import { View, StyleSheet } from 'react-native'
import RepoAvatar from './RepoAvatar'
import RepoInfo from './RepoInfo'

const styles = StyleSheet.create({
  repoWrapper: { display: 'flex', flexDirection: 'row', paddingBottom: 16 },
})

const RepositoryDescription = ({ item }) => {
  return (
    <View style={styles.repoWrapper}>
      <RepoAvatar avatarUrl={item.ownerAvatarUrl} />
      <RepoInfo
        fullName={item.fullName}
        description={item.description}
        language={item.language}
      />
    </View>
  )
}

export default RepositoryDescription
