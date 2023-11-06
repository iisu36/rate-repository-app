import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 1.5,
    paddingBottom: 8,
    backgroundColor: theme.colors.backGround,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab tabText={'Repositories'} />
    </View>
  )
}

export default AppBar
