import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function menubarScreen({navigation}) {
  return (
    <View>
      <LinearGradient
       style={styles.lastSection}
       colors={['#ffffff', '#9CBCE4', ]}
       start={{ x: 1, y: 0 }}
       end={{ x: 1, y: 1 }}
       >
            <View style={styles.last}>
            <TouchableOpacity style={{marginTop: 7,}}>
            <Entypo name="shop" size={24} color="#8B8B8B" />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> navigation.navigate('Product')}
            >
            <MaterialCommunityIcons style={{marginTop: 5}} name="shopping-outline" size={28} color="#8B8B8B" />
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.homeIcon}
            onPress={()=> navigation.navigate('Home')}
            >
            <Text style={styles.home}><Octicons style={{}} name="home" size={35} color="#5351db" /></Text>
            </TouchableOpacity>
            
            
            <TouchableOpacity
            onPress={()=> navigation.navigate('Wishlist')}
            >
            <Entypo style={{marginTop: 6}} name="heart-outlined" size={28} color="#8B8B8B" />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> navigation.navigate('Profile')}
            >
            <MaterialCommunityIcons style={{marginTop: 3}} name="account-outline" size={30} color="#8B8B8B" />
            </TouchableOpacity>
            </View>
        </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    lastSection:{
        width: 390,
        height: 100,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'absolute',
        marginTop: 666
     },
     last:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
     },
     homeIcon:{
        flexDirection: 'row',
     },
})