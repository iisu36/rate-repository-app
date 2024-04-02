import { View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  imageContainer: { paddingRight: 16 },
  image: {
    width: 50,
    height: 50,
    borderRadius: 2,
  },
})

const RepoAvatar = ({ avatarUrl }) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: avatarUrl }} />
    </View>
  )
}

export default RepoAvatar
