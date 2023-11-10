import { View, StyleSheet, Pressable } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  tab: {
    color: 'white',
    fontSize: 20,
    margin: 10,
  },
  bar: { flexDirection: 'row' },
})

const AppBarTab = ({ tabText }) => {
  return (
    <View style={styles.bar}>
      <Pressable>
        <Text style={styles.tab}>{tabText}</Text>
      </Pressable>
    </View>
  )
}

export default AppBarTab
