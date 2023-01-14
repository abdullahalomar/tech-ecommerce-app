import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import laptop from '../../assets/laptop.png'
import head from '../../assets/soundBox.png'
import pod from '../../assets/onboardairpod.png'

export default function cartScreen({navigation}) {

    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    } 
    const decrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    } 

  return (
    <View style={{backgroundColor: '#F5F5F8'}}>
      <View style={styles.main}>
      <View style={styles.first}>
      <MaterialCommunityIcons name="bell-ring-outline" size={24} color="#3d3d3d" />
      <Text style={styles.firstText}>
         Delivery for FREE until the end of the month
         </Text>
      </View>
      </View>

      <View style={styles.secondMain}>
      <View style={styles.secSec}>
        <View style={{marginRight: 10}}>
            <Image
            style={{width: 113, height: 80}}
            source={laptop}
            ></Image>
        </View>
        <View>
            <Text style={styles.mack}>Macbook Air M1</Text>
            <Text style={styles.price}>$ 29,999</Text>

            <View style={{flexDirection: 'row'}}>
            <Text style={styles.quantity}>Quantity</Text>
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
      <View style={styles.secondMain}>
      <View style={styles.secSec}>
        <View style={{marginRight: 10,}}>
            <Image
            style={{width: 113, height: 80}}
            source={head}
            ></Image>
        </View>
        <View>
            <Text style={styles.mack}>Sony WH/1000XM4</Text>
            <Text style={styles.price}>$ 4,999</Text>

            <View style={{flexDirection: 'row'}}>
            <Text style={styles.quantity}>Quantity</Text>
            <View style={styles.btnIcon}>
            <TouchableOpacity style={styles.iconBox}>
            <FontAwesome style={styles.icon} name="minus" size={18} color="white" />
            </TouchableOpacity>
            <Text style={{marginHorizontal: 10, fontSize: 17,}}>{count}</Text>
            <TouchableOpacity style={styles.iconBox}>
            <FontAwesome style={styles.icon} name="plus" size={18} color="white" />
            </TouchableOpacity>
            </View>
            </View>
            
        </View>
      </View>
      </View>
      <View style={styles.secondMain}>
      <View style={styles.secSec}>
        <View style={{marginRight: 10}}>
            <Image
            style={{width: 113, height: 80}}
            source={pod}
            ></Image>
        </View>
        <View>
            <Text style={styles.mack}>FreeBuds Huawei</Text>
            <Text style={styles.price}>$ 1,499</Text>

            <View style={{flexDirection: 'row'}}>
            <Text style={styles.quantity}>Quantity</Text>
            <View style={styles.btnIcon}>
            <TouchableOpacity style={styles.iconBox}>
            <FontAwesome style={styles.icon} name="minus" size={18} color="white" />
            </TouchableOpacity>
            <Text style={{marginHorizontal: 10, fontSize: 17,}}>{count}</Text>
            <TouchableOpacity style={styles.iconBox}>
            <FontAwesome style={styles.icon} name="plus" size={18} color="white" />
            </TouchableOpacity>
            </View>
            </View>
            
        </View>
      </View>
      </View>

      <View style={{marginHorizontal: 40, marginTop: 610, position: 'absolute'}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginRight: 230, fontSize: 20, fontWeight: 'bold'}}>Total</Text>
        <Text style={{fontSize: 17,}}>$ 4000</Text>
      </View>
      <TouchableOpacity 
      style={styles.button}
      onPress={()=> navigation.navigate('Checkout')}
      >
            <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        width:280,
        height: 45,
        backgroundColor: '#baebff',
        marginTop: 40,
        borderRadius: 10,
        marginLeft: 55
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
    secondMain:{
        width: 320,
        height: 110,
        backgroundColor: 'white',
        borderRadius: 15,
        marginLeft: 35,
        marginTop: 20
    },
    secSec:{
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 24
    },
    btnIcon:{
        flexDirection: 'row'
    },
    mack:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    price:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    quantity:{
        fontSize: 15,
        fontWeight: '500',
        marginRight: 13
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
    }
})