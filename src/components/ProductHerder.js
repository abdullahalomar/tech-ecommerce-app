import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProductHerder({ navigation }) {
  return (
    <View>
      <View style={styles.IconFlex}>
        <TouchableOpacity style={styles.firstIcon}>
        <MaterialIcons 
        style={styles.arrow} 
        name="keyboard-arrow-left" 
        size={35} 
        color="#CFCFCF" 
        onPress={()=> navigation.navigate('Home')}
        />
        </TouchableOpacity>
        <View style={styles.secondIcon}>
        <AntDesign style={styles.secondArrow} name="hearto" size={22} color="#CFCFCF" />
        </View>
        
        <View style={styles.shareIcon}>
        <AntDesign style={styles.arrow} name="sharealt" size={24} color="#CFCFCF" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    IconFlex:{
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15,
        position: 'absolute'
    },
    firstIcon:{
        width: 45,
        height: 45,
        backgroundColor: 'white',
        borderRadius: 30,
        
    },
    arrow:{
        marginLeft: 10,
        marginTop: 11,
    },
    secondIcon:{
        width: 45,
        height: 45,
        backgroundColor: '#e8e9eb',
        borderRadius: 30,
        marginLeft: 218,
        marginRight: 10
    },
    secondArrow:{
        marginLeft: 12,
        marginTop: 13
    },
    shareIcon:{
        width: 45,
        height: 45,
        backgroundColor: '#e8e9eb',
        borderRadius: 30,
        
    },
})