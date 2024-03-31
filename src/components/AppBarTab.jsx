import { Pressable } from 'react-native'
import Text from './Text'

const AppBarTab = ({ children }) => {
  return (
    <Pressable>
      <Text style={{ color: 'white' }}>{children}</Text>
    </Pressable>
  )
}

export default AppBarTab
