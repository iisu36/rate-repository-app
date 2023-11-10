import { StyleSheet, View } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  statisticsItem: {
    alignItems: 'center',
  },
  statisticsItemText: {
    marginTop: 10,
  },
})

const StatisticsItem = ({ item, itemLabel }) => {
  return (
    <View style={styles.statisticsItem}>
      <Text fontWeight={'bold'} style={styles.statisticsItemText}>
        {item}
      </Text>
      <Text color={'textSecondary'} style={styles.statisticsItemText}>
        {itemLabel}
      </Text>
    </View>
  )
}

export default StatisticsItem
