import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function Product({product}) {
  const {title, picture, balance} = product;
  return (
    
      <LinearGradient 
          style={styles.laptopBox}
          colors={[ '#c1dae8', '#7db3d1', ]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          >
              <View style={styles.badge}>
              <Text style={styles.badgeText}>Free shipping</Text>
              </View>
              <Image
              style={styles.laptop}
              source={picture}
              ></Image>
              <View style={styles.titleHeader}>
              <Text style={styles.nameTitle}>{title}</Text>
              <Text style={styles.priceTitle}>{balance}</Text>
              </View>
      
          </LinearGradient>
    
  )
}

const styles = StyleSheet.create({
  laptopBox:{
    width: 140,
    height: 152,
    backgroundColor: '#CFCFCF',
    borderRadius: 10,
    marginRight: 10
 },
badge:{
  backgroundColor: 'white',
  marginTop: 10,
  marginRight: 66,
  marginLeft: 5,
  borderRadius: 10
},
badgeText:{
  paddingLeft: 10,
  paddingBottom: 3,
  color: '#FF5500',
  fontSize: 10,
  fontWeight: '400'
},
nameTitle:{
  fontSize: 13,
  fontWeight: '700',
  color: '#343A40',
  textAlign: 'center',
},
priceTitle:{
  fontSize: 18,
  fontWeight: '900',
  color: '#343A40',
textAlign: 'center'
},
titleHeader:{
  marginBottom: 10,
  marginLeft: 1
},
laptop:{
  marginLeft: 30,
  marginTop: 14,
  width: 80,
  height: 60
},
})