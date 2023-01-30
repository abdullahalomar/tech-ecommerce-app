import { View, Text, Image } from 'react-native'
import React from 'react'
import order from '../../assets/icons/order.png'

export default function All() {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 50}}>
      <View></View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}> 
          <Image style={{width: 200, height: 160, marginTop: 30}} source={order} />
          <Text style={{fontSize: 20, fontWeight: '600'}}>There are no orders placed yet.</Text>
        </View>
      <View></View>
    </View>
  )
}