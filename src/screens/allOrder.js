import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import All from '../components/All'


export default function allOrder({navigation}) {
  return (
    <View>
      <View style={{marginHorizontal: 25}}>
      <Text style={styles.title}>My Orders</Text>
      <View style={styles.orderOption}>
        <TouchableOpacity
          onPress={()=> navigation.navigate('AllOrder')}
        >
          <Text style={navigation.state.routeName == 'allOrder' ? styles.active : styles.optionTitle}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionTitle}>To Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionTitle}>To Ship</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionTitle}>To Receive</Text>
        </TouchableOpacity>
      </View>

      <All/>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  orderOption:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  optionTitle:{
    fontSize: 16,
    fontWeight: '700',
    color: '#525457'
  },
  title:{
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 20,
    color: '#525457'
  },
  active:{
    color: 'blue',
    fontSize: 18
  }
})