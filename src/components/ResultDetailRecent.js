import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Badge from './Badge'
import { AntDesign } from '@expo/vector-icons';



export default function ({result, navigation}) {
   
  return (
    <View
      style={styles.cart}
      // colors={['#3d95cc', '#c4d1f5',]}
      // start={{ x: 0, y: 1 }}
      // end={{ x: 1, y: 1 }}
    >
      <TouchableOpacity 
    style={{paddingHorizontal: 25}}
    onPress={()=> {navigation.navigate('Product', {id:result.id})}}
    >
    <Badge/>
     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
       <Image style={styles.image} resizeMode='contain' source={{ uri: result.images[0].src}} />
      <View style={styles.text}>
      <Text style={styles.font}>{result.name.length > 17 ? result.name.slice(0, 17) : result.name }</Text>
      <View style={{}}>
      <Text style={styles.priceFont}>$ {result.price}</Text>
      <Text style={styles.priceFont}><AntDesign name="staro" size={13} color="#e6840e" />{result.average_rating}</Text>
      </View>
      </View>
    </View>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width: 160,
        height: 80,
        borderRadius: 8,
        marginTop: 7
    },
    text:{
        marginTop: 7
    },
    font: {
      fontSize: 15,
      fontWeight: '600'
    },
    priceFont: {
      fontSize: 14,
      fontWeight: '600',
      color: '#5a5e61',
      marginTop: 3
    },
    cart:{
      width: 300,
      marginRight: 10,
      borderRadius: 10,
      paddingVertical: 10,
      backgroundColor: 'white',
      elevation: 1,
    }
})