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
        flexDirection: 'row',
        borderRadius: 10,
        
     },
     badgeText:{
        paddingHorizontal: 7,
        paddingBottom: 2,
        color: 'white',
        fontSize: 9,
        fontWeight: '400',
        borderRadius: 20,
        backgroundColor: '#f0651f',
     },
})

// #FF5500