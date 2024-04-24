import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

import useMe from '../hooks/useMe'
import useAuthStorage from '../hooks/useAuthStorage'

import { useApolloClient } from '@apollo/client'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 16,
    backgroundColor: theme.colors.background,
  },
  scroller: {},
})

const signOut = async (authStorage, apolloClient) => {
  await authStorage.removeAccessToken()
  apolloClient.resetStore()
}

const AppBar = () => {
  const { username } = useMe()
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab url="/">Repositories</AppBarTab>
        {username === null || username === undefined ? (
          <AppBarTab url="/sign-in">Sign in</AppBarTab>
        ) : (
          <AppBarTab
            url="/sign-in"
            action={() => signOut(authStorage, apolloClient)}
          >
            Sign out
          </AppBarTab>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
