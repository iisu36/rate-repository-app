import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { Searchbar } from 'react-native-paper'
import RepositoryItem from './RepositoryItem'
import { Picker } from '@react-native-picker/picker'
import { useNavigate } from 'react-router-native'

import useRepositories from '../hooks/useRepositories'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'
import theme from '../theme'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  const [sortingValue, setSortingValue] = useState('latest')
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500)
  const { repositories } = useRepositories(
    sorter(sortingValue)[0],
    sorter(sortingValue)[1],
    debouncedSearchQuery
  )

  return (
    <RepositoryListContainer
      repositories={repositories}
      headerComponent={
        <HeaderComponent
          sortingValue={sortingValue}
          setSortingValue={setSortingValue}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      }
    />
  )
}

export const RepositoryListContainer = ({ repositories, headerComponent }) => {
  const navigate = useNavigate()

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={headerComponent}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`${item.id}`)}>
          <RepositoryItem key={item.id} item={item}></RepositoryItem>
        </Pressable>
      )}
    />
  )
}

const HeaderComponent = ({
  sortingValue,
  setSortingValue,
  setSearchQuery,
  searchQuery,
}) => {
  return (
    <>
      <SearchBar
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      ></SearchBar>
      <PickerComponent
        sortingValue={sortingValue}
        setSortingValue={setSortingValue}
      ></PickerComponent>
    </>
  )
}

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  )
}

const PickerComponent = ({ sortingValue, setSortingValue }) => {
  return (
    <Picker
      selectedValue={sortingValue}
      style={{
        height: 36,
        backgroundColor: 'inherit',
        fontFamily: theme.fonts.main,
        fontSize: theme.fontSizes.subheading,
      }}
      onValueChange={(itemValue) => {
        setSortingValue(itemValue)
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
