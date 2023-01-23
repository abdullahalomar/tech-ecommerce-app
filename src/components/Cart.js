import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import laptop from '../../assets/laptop.png'
import { TouchableOpacity } from 'react-native';


export default function Cart() {
    const [count, setCount] = useState(1)

    const increase = () => {
        setCount(count + 1)
    } 
    const decrease = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    } 
  return (
    <View>
      <View style={styles.secondMain}>
      <View style={styles.secSec}>
        <View style={{}}>
            <Image
            style={{width: 115, height: 90}}
            source={laptop}
            ></Image>
        </View>
        <View style={{}}>
            <Text style={styles.mack}>Macbook Air M1</Text>
            <Text style={styles.price}>$ 29,999</Text>
        </View>
        <View style={{}}>
            <TouchableOpacity>
            <AntDesign name="delete" size={20} color="red" />
            </TouchableOpacity>

            <View style={styles.btnIcon}>
            <TouchableOpacity 
            style={styles.iconBox}
            onPress={decrease}
            >
            <FontAwesome style={styles.icon} name="minus" size={18} color="white" />
            </TouchableOpacity>
            <Text style={{marginHorizontal: 10, fontSize: 17,}}>{count}</Text>
            <TouchableOpacity 
            style={styles.iconBox}
            onPress={increase}
            >
            <FontAwesome style={styles.icon} name="plus" size={18} color="white" />
            </TouchableOpacity>
            
            </View>
            </View>
        
      </View>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    secondMain:{
        width: 350,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 15,
        marginHorizontal: 20,
        marginBottom: 15,
        elevation: 6
    },
    secSec:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 28
    },
    mack:{
        fontSize: 19,
        fontWeight: '700',
    },
    price:{
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 5
    },
    icon:{
        marginTop: 4,
        marginLeft: 7.5
    },
    iconBox:{
        width: 30,
        height: 25,
        backgroundColor: '#7DCCEC',
        borderRadius: 5
    },
    btnIcon:{
        flexDirection: 'row',
        marginTop: 30 
    },
})