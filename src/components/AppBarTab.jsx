import { Pressable } from 'react-native'
import Text from './Text'

const AppBarTab = ({ children }) => {
  return (
    <Pressable>
      <Text fontWeight="bold" style={{ color: 'white' }}>
        {children}
      </Text>
    </Pressable>
  )
}

export default AppBarTab
