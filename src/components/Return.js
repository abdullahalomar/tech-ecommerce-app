import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


export default function Return({ navigation }) {

 

  return (
    <View style={{marginVertical: 40}}>
      <View style={styles.section}>
        <TouchableOpacity 
        style={styles.flex}
        onPress={()=> navigation.navigate('Return')}
        >
        <MaterialIcons name="assignment-return" size={24} color="#567189" />
        <Text style={styles.title}>My Return</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.flex}
        onPress={()=> navigation.navigate('Cancel')}
        >
        <MaterialCommunityIcons name="table-cancel" size={24} color="#567189" />
        <Text style={styles.title}>My Cancellations</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    section:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    flex:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        elevation: 2
    },
    title:{
        marginLeft: 5,
        fontSize: 15,
        fontWeight: '700',
        color: '#5d6063'
    }
})