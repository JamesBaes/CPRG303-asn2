import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={24} color='black' />
      <Text style={styles.searchBarText}>What do you want to listen to?</Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({

  container: {
    width: "100%", 
    height: 50, 
    backgroundColor: "white", 
    borderRadius: 9, 
    marginTop: 10, 
    flexDirection: 'row', 
    alignItems: 'center',
    gap: 8,
    padding: 15 
  },

  searchBarText: {
    fontWeight: "bold",
    fontSize: 14
  },

})