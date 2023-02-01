import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Category({ category,filter }) {

  return (
    <View style={styles.categoryBox}>
      <TouchableOpacity onPress={(category)=>{return filter(category)}}>
      <Text style={{lineHeight: 15, textAlign: 'center', paddingVertical: 8}}>{category}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  categoryBox:{
    paddingHorizontal: 8,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    elevation: 1,
  }
})

