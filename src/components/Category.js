import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Category({ category }) {

  return (
    <View style={styles.categoryBox}>
      <TouchableOpacity>
      <Text style={{lineHeight: 15, textAlign: 'center', paddingVertical: 8}}>{category}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  categoryBox:{
    width: '45%',
    marginRight: 10,
    backgroundColor: '#d5deeb',
    borderRadius: 3,
    marginVertical: 5,
  }
})

