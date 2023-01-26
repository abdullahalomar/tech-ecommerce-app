import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Category({ category }) {

  return (
    <View style={styles.categoryBox}>
      <TouchableOpacity>
      <Text>{category.category.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  categoryBox:{
    marginRight: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: 'white',
    borderRadius: 10
  }
})

