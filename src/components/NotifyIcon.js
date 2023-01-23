import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function NotifyIcon({navigation}) {
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
        >
        <Feather name="bell" size={24} color="#757678" />
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.iconBox}
        >
  
        <Feather name="message-circle" size={24} color="#757678" />
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.iconBox}
        >
        <Feather name="star" size={24} color="#757678" />
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    notification:{
        flexDirection: 'row',
        position: 'absolute',
        marginLeft: 30,
        marginTop: 55
    },
    iconBox:{
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        marginRight: 26.5,
        elevation: 4
    },
})