import { Image, StyleSheet, View } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
  },
  repoText: {
    marginLeft: 15,
    alignItems: 'flex-start',
  },
  repoTextItem: { marginBottom: 10 },
  repoLanguageItem: {
    padding: 5,
    backgroundColor: theme.colors.primary,
    color: 'white',
    borderRadius: 4,
    overflow: 'hidden',
  },
  repoImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
})

const RepositoryItemInfo = ({
  fullName,
  description,
  language,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.infoContainer}>
      <Image style={styles.repoImage} source={{ uri: ownerAvatarUrl }}></Image>
      <View style={styles.repoText}>
        <Text fontWeight={'bold'} style={styles.repoTextItem}>
          {fullName}
        </Text>
        <Text color={'textSecondary'} style={styles.repoTextItem}>
          {description}
        </Text>
        <Text style={styles.repoLanguageItem}>{language}</Text>
      </View>
    </View>
  )
}

export default RepositoryItemInfo
