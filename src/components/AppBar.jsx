import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 16,
    backgroundColor: theme.colors.background,
    padding: 16,
    justifyContent: 'space-between',
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab url="/">Repositories</AppBarTab>
      <AppBarTab url="/sign-in">Sign in</AppBarTab>
    </View>
  )
}

export default AppBar
