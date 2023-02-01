import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import laptop from '../../assets/laptop.png'
import { Ionicons } from '@expo/vector-icons';

export default function Cancel({navigation}) {
  return (
    <View style={{marginHorizontal: 20}}>
        <View style={styles.header}>
      <TouchableOpacity
      onPress={()=>navigation.navigate('Profile')}
      >
      <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>My Cancellations</Text>
      </View>
      <View>
      <View style={{marginVertical: 10}}>
        <Text style={styles.orderNo}>Order No.69900349034034</Text>
        <Text style={styles.orderNo}>Requested on :31 Jan 2023</Text>
      </View>
      <View style={styles.product}>
      <Image source={laptop}/>
      <View>
        <View>
        <Text>Dell Precision 3571 Workstation</Text>
        <Text>Color Family: Black</Text>
        </View>
        <View style={styles.price}>
        <Text>$ 3,089</Text>
        <Text>Cancelled</Text>
      </View>
      </View>
      </View>
      
      <Text>Reason: system default reason</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize: 18,
        fontWeight: '600'
    },
    header:{
        flexDirection: 'row'
    },
    orderNo:{
        fontSize: 15,
        color: '#515254'
    },
    product:{
        flexDirection: 'row'
    },
    price:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})