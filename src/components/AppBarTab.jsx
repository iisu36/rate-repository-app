import { StyleSheet } from 'react-native'
import Text from './Text'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  link: {
    padding: 16,
  },
})

const AppBarTab = ({ children, url, action = null }) => {
  return (
    <Link
      to={url}
      style={styles.link}
      onPress={() => {
        if (action) {
          action()
        }
      }}
    >
      <Text fontWeight="bold" style={{ color: 'white' }}>
        {children}
      </Text>
    </Link>
  )
}

export default AppBarTab
