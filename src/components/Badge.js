import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Badge() {
  return (
    <View>
      <View style={styles.badge}>
              <Text style={styles.badgeText}>Free shipping</Text>
              </View>
    </View>
  )
}

const styles = StyleSheet.create({
    badge:{
        backgroundColor: 'white',
        marginRight: 75,
        marginLeft: 5,
        borderRadius: 10,
     },
     badgeText:{
        textAlign: 'center',
        paddingBottom: 3,
        color: '#FF5500',
        fontSize: 10,
        fontWeight: '400'
     },
})