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
    
    onPress={()=> {navigation.navigate('Product', {id:result.id})}}
    >
      <Badge/>
        <Image style={styles.image} source={{ uri: result.image}} />
      <View style={styles.text}>
      <Text style={styles.font}>{result.title.length > 10 ? result.title.slice(0, 20) : result.title }</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.priceFont}>$ {result.price}</Text>
      <Text style={styles.priceFont}><AntDesign name="staro" size={13} color="#e6840e" />{result.rating.rate}</Text>
      </View>
      </View>
      {/* <Text>{result.rating}</Text> */}
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width: 120,
        height: 100,
        borderRadius: 8,
        marginTop: 5
    },
    text:{
        marginTop: 5
    },
    font: {
      fontSize: 15,
      fontWeight: '600'
    },
    priceFont: {
      fontSize: 15,
      fontWeight: '600',
      color: '#5a5e61'
    },
    cart:{
      marginRight: 10,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: 'white',
    }
})