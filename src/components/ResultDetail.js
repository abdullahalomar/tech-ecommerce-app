import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Badge from './Badge'



export default function ({result, navigation}) {
   
  return (
    <TouchableOpacity 
    style={{marginRight: 10}}
    onPress={()=> {navigation.navigate('Product', {product: result})}}
    >
      <Badge/>
        <Image style={styles.image} source={{ uri: result.category.image}} />
      <View style={styles.text}>
      <Text style={styles.font}>{result.title}</Text>
      <Text style={styles.font}>$ {result.price}</Text>
      </View>
      {/* <Text>{result.rating}</Text> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    image:{
        width: 150,
        height: 120,
        borderRadius: 8,
        marginTop: 5
    },
    text:{
        alignItems: 'center',
        marginTop: 5
    },
    font: {
      fontSize: 15,
      fontWeight: '600'
    }
})