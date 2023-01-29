import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function Services() {
  return (
    <View style={{marginHorizontal: 20, marginTop: 30}}>
      <Text style={{fontSize: 20, fontWeight: '700'}}>My Services</Text>
      <View style={styles.section}>
      <View style={styles.option}>
      <MaterialIcons name="message" size={30} color="black" />
      <Text style={styles.title}>My Messages</Text>
      </View>
      <View style={styles.option}>
      <MaterialIcons name="payment" size={30} color="black" />
      <Text style={styles.title}>Payment</Text>
      <Text style={styles.title}>Options</Text>
      </View>
      <View style={styles.option}>
      <Feather name="help-circle" size={30} color="black" />
      <Text style={styles.title}>Help Center</Text>
      </View>
      <View style={styles.option}>
      <Fontisto name="hipchat" size={30} color="black" />
      <Text style={styles.title}>Chat with us</Text>
      </View>
      <View style={styles.option}>
      <MaterialIcons name="rate-review" size={30} color="black" />
      <Text style={styles.title}>My Reviews</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    section:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    option:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 25,
    },
    title: {
        fontSize: 13,
        color: '#5d6063',
    }
})