import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 16,
    backgroundColor: theme.colors.background,
  },
  scroller: {},
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab url="/">Repositories</AppBarTab>
        <AppBarTab url="/sign-in">Sign in</AppBarTab>
      </ScrollView>
    </View>
  )
}

export default AppBar
