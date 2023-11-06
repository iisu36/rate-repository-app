import { StyleSheet, Text, Pressable } from 'react-native'

const styles = StyleSheet.create({
  tab: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 8,
  },
  // ...
})

const AppBarTab = ({ tabText }) => {
  return (
    <Pressable>
      <Text style={styles.tab}>{tabText}</Text>
    </Pressable>
  )
}

export default AppBarTab
