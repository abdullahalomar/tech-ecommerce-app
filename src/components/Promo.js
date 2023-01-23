import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Promo() {
  return (
    <View>
      <View style={styles.inputPromoMain}>
            <View style={styles.inputPromo}>
            <TextInput
            style={{ fontSize: 18}}
            placeholder="Promo Code"
            placeholderTextColor={'#6d6d6e'}
            >
            </TextInput>
            <TouchableOpacity>
            <LinearGradient 
            style={styles.promo}
            colors={['#cbb9ed', '#6d6bed' ]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            >
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 17, marginTop: 5}}>USE</Text>
            </LinearGradient>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputPromoMain:{
        width: 348,
        height:50,
        borderRadius: 15,
        marginBottom: 15,
        backgroundColor: 'white',
        
    },
    inputPromo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginTop: 4
    },
    promo:{
        width: 65,
        height: 40,
        borderRadius: 15,
    }
})