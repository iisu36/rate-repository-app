import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { Searchbar } from 'react-native-paper'
import RepositoryItem from './RepositoryItem'
import Picker from 'react-native-picker-select'
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

const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.subheading,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  inputAndroid: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.subheading,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  inputWeb: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.subheading,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  const [sortingValue, setSortingValue] = useState('latest')
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500)
  const { repositories, fetchMore } = useRepositories({
    first: 10,
    orderBy: sorter(sortingValue)[0],
    orderDirection: sorter(sortingValue)[1],
    searchKeyword: debouncedSearchQuery,
  })

  const onEndReach = () => {
    fetchMore()
  }

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
      onEndReach={onEndReach}
    />
  )
}

export const RepositoryListContainer = ({
  repositories,
  headerComponent,
  onEndReach,
}) => {
  const navigate = useNavigate()

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={headerComponent}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.3}
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
      value={sortingValue}
      style={pickerStyles}
      onValueChange={(itemValue) => {
        setSortingValue(itemValue)
      }}
      items={[
        { label: 'Latest repositories', value: 'latest' },
        { label: 'Highest rated repositories', value: 'highest' },
        { label: 'Lowest rated repositories', value: 'lowest' },
      ]}
    >
      {/* <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" /> */}
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
