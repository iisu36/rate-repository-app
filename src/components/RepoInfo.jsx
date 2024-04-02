import { View, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  repoInfo: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
  },
  languageWrapper: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    borderRadius: 4,
    padding: 4,
  },
  languageText: {
    color: 'white',
  },
})

const RepoInfo = ({ fullName, description, language }) => {
  return (
    <View style={styles.repoInfo}>
      <Text fontWeight="bold">{fullName}</Text>
      <Text color="textSecondary">{description}</Text>
      <View style={styles.languageWrapper}>
        <Text style={styles.languageText}>{language}</Text>
      </View>
    </View>
  )
}

export default RepoInfo
