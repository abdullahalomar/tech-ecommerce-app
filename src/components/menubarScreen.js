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
            <Octicons style={navigation.state.routeName == 'Home'? styles.active : {color:'#8B8B8B'}} name="home" size={24} color="#5351db" />
            </TouchableOpacity>

            <TouchableOpacity 
            style={{marginTop: 7,}}
            onPress={()=> navigation.navigate('Shop')}
            >
            <Entypo style={navigation.state.routeName == 'Shop'? styles.active :{color:'#8B8B8B'}} name="shop" size={24} />
            </TouchableOpacity>

            <TouchableOpacity
            style={{marginTop: 6}}
            onPress={()=> navigation.navigate('Wishlist')}
            >
            <Entypo style={navigation.state.routeName == 'Wishlist'? styles.active :{color:'#8B8B8B'}} name="heart-outlined" size={28}/>
            </TouchableOpacity>

            <TouchableOpacity
            style={{marginTop: 6}}
            onPress={()=> navigation.navigate('Cart')}
            >
            <AntDesign style={navigation.state.routeName == 'Cart'? styles.active :{color:'#8B8B8B'}} name="shoppingcart" size={28}/>
            </TouchableOpacity>

            <TouchableOpacity
            style={{marginTop: 3}}
            onPress={()=> navigation.navigate('Profile')}
            >
            <MaterialCommunityIcons style={navigation.state.routeName == 'Profile'? styles.active :{color:'#8B8B8B'}} name="account-outline" size={28}/>
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
        marginTop: 7,
     },
     active:{
        color: '#5351db',
        
     }
})