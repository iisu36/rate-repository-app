import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import useSingleRepository from '../hooks/useSingleRepository'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import Text from './Text'
import theme from '../theme'
import * as Linking from 'expo-linking'
import { format } from 'date-fns'

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    gap: 4,
  },
  separator: {
    height: 10,
  },
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
  ratingContainer: {
    display: 'flex',
    paddingRight: 16,
  },
  ratingText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 24,
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

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText} color={'primary'} fontWeight={'bold'}>
          {review.rating}
        </Text>
      </View>
      <View style={styles.container}>
        <Text fontWeight={'bold'}>{review.user.username}</Text>
        <Text color={'textSecondary'}>
          {format(review.createdAt, 'dd.MM.yyyy')}
        </Text>
        <Text color={'textPrimary'}>{review.text}</Text>
      </View>
    </View>
  )
}

const ItemSeparator = () => <View style={styles.separator} />

const SingleRepository = () => {
  const { repositoryId } = useParams()
  const { repository } = useSingleRepository(repositoryId)

  if (repository === undefined || repository === null) return null

  const reviews = repository.reviews.edges.map((edge) => edge.node)

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default SingleRepository
