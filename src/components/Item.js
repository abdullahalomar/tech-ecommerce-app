import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Item({item, navigation}) {
  return (
    <TouchableOpacity 
    style={styles.card}
    onPress={()=> {navigation.navigate('Product', {id:item?.id})}}
    navigation={navigation}
    >
       <View style={styles.cardFlex}>
       <Image style={styles.image} resizeMode='contain' source={{ uri: item.images[0].src}} />
      <View style={styles.text}>
      <Text style={styles.font}>{item.name.length < 20 ? item.name : item.name.substring(0, 20)}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.font}>$ {item.price}</Text>
      
      <Text style={styles.fontRate}><AntDesign name="staro" size={14} color="#F2921D" /> {item.average_rating}</Text>
      {/* <Text style={[styles.fontRate, {paddingLeft: 7}]}>({rating.count})</Text> */}
      
      </View>
      </View>
       </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 130,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    text:{
        marginTop: 5
    },
    fontRate: {
       fontSize: 12
    },
    card:{
      width:'46%', 
      marginBottom: 15, 
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      borderRadius: 15,
      paddingBottom: 10,
      marginHorizontal: 5
    },
    cardFlex:{
      width: '100%',
         justifyContent: 'center', 
         alignItems: 'center',
       },

})