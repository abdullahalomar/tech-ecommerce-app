import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ({result}) {
  return (
    <View style={{marginRight: 10}}>
        <Image style={styles.image} source={{ uri: result.image_url}} />
      <Text>{result.name}</Text>
      <Text>{result.price}</Text>
      {/* <Text>{result.rating}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width: 150,
        height: 120,
        borderRadius: 8
    }
})