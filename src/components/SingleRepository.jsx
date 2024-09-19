import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import useSingleRepository from '../hooks/useSingleRepository'
import { FlatList, Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'
import * as Linking from 'expo-linking'
import ReviewList from './ReviewList'

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

const RepositoryInfo = ({ repository }) => {
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

const SingleRepository = () => {
  const { repositoryId } = useParams()
  const { repository, fetchMore } = useSingleRepository({
    repositoryId,
    first: 10,
  })

  if (repository === undefined || repository === null) return null

  const reviews = repository.reviews.edges.map((edge) => edge.node)

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <ReviewList
      reviews={reviews}
      repositoryInfoComponent={<RepositoryInfo repository={repository} />}
      onEndReach={onEndReach}
    />
  )
}

export default SingleRepository
