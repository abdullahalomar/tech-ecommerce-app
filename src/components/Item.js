import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Item({item}) {
    const {image, title, price} = item;
  return (
    <TouchableOpacity style={{width:'30%'}}>
       <Image style={styles.image} source={{ uri: image}} />
      <View style={styles.text}>
      <Text style={styles.font}>{title.length < 10 ? title : title.substring(0, 10)}</Text>
      <Text style={styles.font}>$ {price}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    image:{
        width: 80,
        height: 60,
        borderRadius: 8,
        marginTop: 5
    },
    text:{
        
        marginTop: 5
    },
    font: {
      
    }
})