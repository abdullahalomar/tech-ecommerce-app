import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import laptop from '../../assets/laptop.png'
import head from '../../assets/soundBox.png'
import pod from '../../assets/onboardairpod.png'
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Cart from '../components/Cart';
import Promo from '../components/Promo';

export default function cartScreen({navigation}) {

    

  return (
    <View style={styles.background}>
     {/* <View style={styles.main}>
      <View style={styles.first}>
      <MaterialCommunityIcons name="bell-ring-outline" size={24} color="#3d3d3d" />
      <Text style={styles.firstText}>
         Delivery for FREE until the end of the month
         </Text>
      </View>
      </View> */}
     <ScrollView>
        <View style={styles.body}>
      {/* cart   */}
            <Cart/>
      {/* cart */}
    
        </View>
        </ScrollView>
        
        <View style={{marginTop: 475, position: 'absolute', marginHorizontal: 22,}}>
        <Promo/>
      <LinearGradient 
      style={{
      paddingVertical: 15,
      paddingHorizontal: 20, 
      borderRadius: 20,
      elevation: 10,
      }}
      colors={[ '#ffffff', '#9CBCE4',  ]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      >
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Total items(3)</Text>
        <Text style={{fontSize: 17,}}>$ 4000</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Delivery</Text>
        <Text style={{fontSize: 17,}}>$ 8000</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 8}}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Total</Text>
        <Text style={{fontSize: 17,}}>$ 12000</Text>
      </View>
      <TouchableOpacity 
      style={styles.button}
      onPress={()=> navigation.navigate('Checkout')}
      >
            <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
      </LinearGradient>
      </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    background:{
        width: '100%',
        height: 490,
        backgroundColor: '#F5F5F8'
    },
    body:{
        marginTop: 25,
    },
    main:{
        width:280,
        height: 45,
        backgroundColor: '#baebff',
        borderRadius: 10,
        marginLeft: 55,
        marginTop: 20
    },
    first:{
        marginLeft: 12,
        flexDirection: 'row',
        marginTop: 8
    },
    firstText:{
        fontSize: 14,
        fontWeight: '700',
        marginTop: 3,
        color: '#3d3d3d',
        marginLeft: 5
    },
    quantity:{
        fontSize: 15,
        fontWeight: '500',
        marginRight: 13
    },
    button:{
        width: 307,
        height: 60,
        backgroundColor: '#6d6bed',
        borderRadius: 10,
        marginTop: 30
    },
    buttonText:{
        textAlign: 'center',
        marginTop: 14,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
})