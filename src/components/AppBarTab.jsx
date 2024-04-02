import { StyleSheet } from 'react-native'
import Text from './Text'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  link: {
    padding: 16,
    margin: -16,
  },
})

const AppBarTab = ({ children, url }) => {
  return (
    <Link to={url} style={styles.link}>
      <Text fontWeight="bold" style={{ color: 'white' }}>
        {children}
      </Text>
    </Link>
  )
}

export default AppBarTab
