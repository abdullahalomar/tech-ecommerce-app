import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function Services() {
  return (
    <View style={{marginHorizontal: 20}}>
      <Text style={{fontSize: 20, fontWeight: '700'}}>My Services</Text>
      <View style={styles.section}>
      <TouchableOpacity style={styles.option}>
      <MaterialIcons name="message" size={30} color="#567189" />
      <Text style={styles.title}>My Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
      <MaterialIcons name="payment" size={30} color="#567189" />
      <Text style={styles.title}>Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
      <Feather name="help-circle" size={30} color="#567189" />
      <Text style={styles.title}>Help Center</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
      <Fontisto name="hipchat" size={30} color="#567189" />
      <Text style={styles.title}>Chat with us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
      <MaterialIcons name="rate-review" size={30} color="#567189" />
      <Text style={styles.title}>My Reviews</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    section:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 15
    },
    option:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 25,
        paddingBottom: 15
    },
    title: {
        fontSize: 13,
        color: '#5d6063',
    }
})