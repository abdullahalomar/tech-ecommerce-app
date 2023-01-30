import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import icon from '../../assets/icons/return.png'
import { Image } from 'react-native'


export default function ReturnDetails({navigation}) {
    
  return (
    <View style={{marginTop: 20, marginHorizontal: 20}}>
      <Text style={{fontSize: 20, fontWeight: '700', color: '#515254'}}>My Returns</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View></View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 170, height: 193, marginTop: 40, marginBottom: 15}} source={icon}/>
        <Text style={{fontSize: 16, fontWeight: '700'}}>Oops</Text>
        <Text style={{marginVertical: 15, fontSize: 16, fontWeight: '700', color: '#515254'}}>There are no returns yet.</Text>

        <TouchableOpacity
        onPress={()=> navigation.navigate('Home')}
        >
            <Text style={{
                backgroundColor: '#6592c9',
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 15,
                fontSize: 15,
                fontWeight: '600',
                color: 'white'
            }}>CONTINUE SHOPPING</Text>
        </TouchableOpacity>
        </View>
        <View></View>
      </View>
    </View>
  )
}