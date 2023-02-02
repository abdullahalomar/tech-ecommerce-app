import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import PopUp from './PopUp';
import { Ionicons } from '@expo/vector-icons';


export default function NotifyIcon({ navigation }) {

  return (
    <View>
      <View style={styles.notification}>
        <TouchableOpacity 
        style={styles.iconBox}
        onPress={()=> navigation.navigate('Wishlist')}
        >
        <AntDesign name="hearto" size={24} color="#757678" />
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.iconBox}
        onPress={()=> navigation.navigate('Notification')}
        >
        <Ionicons name="ios-notifications-outline" size={24} color="#757678" />
        </TouchableOpacity>
        <View style={styles.iconBox}>
        <PopUp/>
        </View>
        
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    notification:{
        flexDirection: 'row',
        
        marginTop: '13%',
        justifyContent: 'space-evenly'
    },
    iconBox:{
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        marginHorizontal: '5%',
        elevation: 4
    },
})