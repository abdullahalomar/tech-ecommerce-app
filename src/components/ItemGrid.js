import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function ItemGrid({item}) {
    const {image, title, price, rating} = item;
  return (
    <View>
      <TouchableOpacity style={styles.card}>
       <View style={styles.cardFlex}>
       <Image style={styles.image} resizeMode='contain' source={{ uri: image}} />
      <View style={styles.text}>
      <Text style={styles.font}>{title.length < 30 ? title : title.substring(0, 30)}</Text>
      <Text style={styles.font}>$ {price}</Text>
      <View style={{flexDirection: 'row'}}>
      <Text style={styles.fontRate}><AntDesign name="staro" size={14} color="#F2921D" /> {rating.rate}</Text>
      <Text style={[styles.fontRate, {paddingLeft: 7}]}>({rating.count})</Text>
      </View>
      </View>
       </View>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width: 100,
        height: 100,
    },
    text:{
        paddingLeft: 15
    },
    fontRate: {
       fontSize: 14,
       
    },
    card:{
      paddingVertical: 10,
      marginBottom: 15, 
      backgroundColor: 'white',
      borderRadius: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15
      
    },
    cardFlex:{
      alignItems: 'center',
      flexDirection: 'row'
    },
    font:{
      fontSize: 16,
      fontWeight: '500',
      paddingBottom: 2
    }
})