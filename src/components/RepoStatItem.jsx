import { View, StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  statItem: {
    display: 'flex',
    alignItems: 'center',
  },
})

const RepoStatItem = ({ children, label }) => {
  return (
    <View style={styles.statItem}>
      <Text fontWeight="bold">{children}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  )
}

export default RepoStatItem
