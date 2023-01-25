import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function MenubarScreen({children, navigation}) {
  
  return (
    <View>
      {children}
      <LinearGradient
       style={styles.lastSection}
       colors={['#ffffff', '#c4d1f5',]}
       start={{ x: 0, y: 1 }}
       end={{ x: 1, y: 1 }}
       >
            <View style={styles.last}>
            <TouchableOpacity 
            style={styles.homeIcon}
            onPress={()=> navigation.navigate('Home')}
            >
            <Text style={styles.home}><Octicons style={{}} name="home" size={35} color="#5351db" /></Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{marginTop: 7,}}
            onPress={()=> navigation.navigate('Shop')}
            >
            <Entypo name="shop" size={24} color="#8B8B8B" />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> navigation.navigate('Wishlist')}
            >
            <Entypo style={{marginTop: 6}} name="heart-outlined" size={28} color="#8B8B8B" />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> navigation.navigate('Cart')}
            >
            <AntDesign style={{marginTop: 6}} name="shoppingcart" size={28} color="#8B8B8B" />
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
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'absolute',
        marginTop: '175%',
        elevation: 4
     },
     last:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
     },
     homeIcon:{
        flexDirection: 'row',
     },
})