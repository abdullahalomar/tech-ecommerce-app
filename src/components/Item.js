import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Item({item}) {
    const {category, title, price} = item;
  return (
    <View>
       <Image style={styles.image} source={{ uri: category.image}} />
      <View style={styles.text}>
      <Text style={styles.font}>{title}</Text>
      <Text style={styles.font}>$ {price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width: 130,
        height: 120,
        borderRadius: 8,
        marginTop: 5
    },
    text:{
        
        marginTop: 5
    },
    font: {
      fontSize: 15,
      fontWeight: '600'
    }
})