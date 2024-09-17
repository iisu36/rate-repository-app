import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import { Picker } from '@react-native-picker/picker'
import { useNavigate } from 'react-router-native'

import useRepositories from '../hooks/useRepositories'
import { useState } from 'react'
import theme from '../theme'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories, pickerComponent }) => {
  const navigate = useNavigate()

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={pickerComponent}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`${item.id}`)}>
          <RepositoryItem key={item.id} item={item}></RepositoryItem>
        </Pressable>
      )}
    />
  )
}

const RepositoryList = () => {
  const [sortingValue, setSortingValue] = useState(['CREATED_AT', 'DESC'])
  const { repositories } = useRepositories(sortingValue[0], sortingValue[1])

  return (
    <RepositoryListContainer
      repositories={repositories}
      pickerComponent={<PickerComponent setSortingValue={setSortingValue} />}
    />
  )
}

const PickerComponent = ({ setSortingValue }) => {
  return (
    <Picker
      selectedValue="latest"
      style={{
        height: 36,
        backgroundColor: 'inherit',
        fontFamily: theme.fonts.main,
        fontSize: theme.fontSizes.subheading,
      }}
      onValueChange={(itemValue) => {
        setSortingValue(sorter(itemValue))
      }}
    >
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />
    </Picker>
  )
}

const sorter = (sortingValue) => {
  switch (sortingValue) {
    case 'latest':
      return ['CREATED_AT', 'DESC']
    case 'highest':
      return ['RATING_AVERAGE', 'DESC']
    case 'lowest':
      return ['RATING_AVERAGE', 'ASC']
    default:
      return ['CREATED_AT', 'DESC']
  }
}

export default RepositoryList
