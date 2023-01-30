import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Item({item}) {
    const {image, title, price, rating} = item;
  return (
    <TouchableOpacity style={styles.card}>
       <View style={styles.cardFlex}>
       <Image style={styles.image} resizeMode='contain' source={{ uri: image}} />
      <View style={styles.text}>
      <Text style={styles.font}>{title.length < 20 ? title : title.substring(0, 20)}</Text>
      <Text style={styles.font}>$ {price}</Text>
      <View style={{flexDirection: 'row'}}>
      <Text style={styles.font}><AntDesign name="staro" size={16} color="#F2921D" /> {rating.rate}</Text>
      <Text style={[styles.font, {paddingLeft: 7}]}>({rating.count})</Text>
      </View>
      </View>
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
      
    },
    card:{
      width:'46%', 
      marginBottom: 15, 
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      borderRadius: 15,
      paddingVertical: 10,
      marginHorizontal: 5
    },
    cardFlex:{
         justifyContent: 'center', 
         alignItems: 'center',
       }
    // card:{
    //   width:'70%', 
    //   height: '7%',
    //   marginBottom: 15, 
    //   backgroundColor: 'white',
    //   borderRadius: 15,
    //   flexDirection: 'row',
    //   justifyContent: 'center',
    //   marginHorizontal: 20
    // },
    // cardFlex:{
    //   justifyContent: 'center', 
    //   alignItems: 'center',
    //   flexDirection: 'row'
    // }
})