import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function MyOrders({ navigation }) {
  return (
    <View style={styles.OrderContainer}>
        <View style={styles.header}>
        <Text style={{fontWeight: '700', fontSize: 20}}>My Orders</Text>

        <TouchableOpacity 
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={()=> navigation.navigate('Order')}
        >
        <Text style={{fontWeight: '300', fontSize: 15}}>View All</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#2172db" />
        </TouchableOpacity>
        </View>
      <View style={styles.order}>
      <TouchableOpacity style={styles.subSection}
      onPress={()=> navigation.navigate('Order')}
      >
      <MaterialIcons name="payments" size={30} color="#567189" />
      <Text style={styles.title}>To Pay</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subSection}>
      <MaterialCommunityIcons name="wallet-membership" size={30} color="#567189" />
      <Text style={styles.title}>To Ship</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subSection}>
      <FontAwesome5 name="shipping-fast" size={30} color="#567189" />
      <Text style={styles.title}>To Receive</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subSection}>
      <MaterialIcons name="rate-review" size={30} color="#567189" />
      <Text style={styles.title}>To Review</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   
})