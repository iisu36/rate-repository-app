import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import useSingleRepository from '../hooks/useSingleRepository'
import { FlatList, Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'
import * as Linking from 'expo-linking'

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderStyle: 'solid',
    borderRadius: 2,
    padding: 4,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
  },
})

const SingleRepository = () => {
  const { repositoryId } = useParams()
  const { repository } = useSingleRepository(repositoryId)

  if (repository === undefined || repository === null) return null

  return (
    <FlatList
      data={[repository]}
      renderItem={({ item }) => (
        <RepositoryItem
          key={item.id}
          item={item}
          button={<Button repositoryUrl={repository.url} />}
        ></RepositoryItem>
      )}
    />
  )
}

const Button = ({ repositoryUrl }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => Linking.openURL(repositoryUrl)}
    >
      <Text style={styles.buttonText}>Open in GitHub</Text>
    </Pressable>
  )
}

export default SingleRepository
