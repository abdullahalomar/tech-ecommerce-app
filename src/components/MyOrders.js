import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function MyOrders() {
  return (
    <View style={styles.OrderContainer}>
        <View style={styles.header}>
        <Text style={{fontWeight: '700', fontSize: 20}}>MY Orders</Text>

        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontWeight: '300', fontSize: 15}}>View All</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#2172db" />
        </TouchableOpacity>
        </View>
      <View style={styles.order}>
      <View style={styles.subSection}>
      <MaterialIcons name="payments" size={30} color="#567189" />
      <Text style={styles.title}>To Pay</Text>
      </View>
      <View style={styles.subSection}>
      <MaterialCommunityIcons name="wallet-membership" size={30} color="#567189" />
      <Text style={styles.title}>To Ship</Text>
      </View>
      <View style={styles.subSection}>
      <FontAwesome5 name="shipping-fast" size={30} color="#567189" />
      <Text style={styles.title}>To Receive</Text>
      </View>
      <View style={styles.subSection}>
      <MaterialIcons name="rate-review" size={30} color="#567189" />
      <Text style={styles.title}>To Review</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    OrderContainer:{
        marginTop: 45
    },
    header:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginHorizontal: 20,
        marginBottom: 12
    },
    order:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    title:{
        paddingTop: 8,
        color: '#5d6063',
        fontSize: 13
    },
    subSection:{
      justifyContent:'center', 
      alignItems: 'center'
    }
})