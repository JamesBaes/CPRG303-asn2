import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FilterButton = (category: string) => {
  return (
    <View>
      <Text>{category}</Text>
    </View>
  )
}

export default FilterButton

const styles = StyleSheet.create({})