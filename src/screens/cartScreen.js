import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import laptop from '../../assets/laptop.png'
import head from '../../assets/soundBox.png'
import pod from '../../assets/onboardairpod.png'
import { LinearGradient } from 'expo-linear-gradient';

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
    <View style={styles.background}>
     <View style={styles.main}>
      <View style={styles.first}>
      <MaterialCommunityIcons name="bell-ring-outline" size={24} color="#3d3d3d" />
      <Text style={styles.firstText}>
         Delivery for FREE until the end of the month
         </Text>
      </View>
      </View>
     <ScrollView>
        <View style={styles.body}>
    
        

      {/* cart   */}
      
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
    
      {/* cart */}
    
      
        </View>
        </ScrollView>

        
        <View style={{marginTop: 490, position: 'absolute', marginHorizontal: 22,}}>
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
      <LinearGradient 
      style={{
      paddingVertical: 15,
      paddingHorizontal: 20, 
      borderRadius: 20,
      borderWidth: 0.5,
      borderColor: '#c2c2c2'
      }}
      colors={['#cacdeb', '#9CBCE4' ]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      >
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Total items(3)</Text>
        <Text style={{fontSize: 17,}}>$ 4000</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Delivery</Text>
        <Text style={{fontSize: 17,}}>$ 8000</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 8}}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Total</Text>
        <Text style={{fontSize: 17,}}>$ 12000</Text>
      </View>
      <TouchableOpacity 
      style={styles.button}
      onPress={()=> navigation.navigate('Checkout')}
      >
            <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
      </LinearGradient>
      </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    background:{
        width: 408,
        height: 490,
        backgroundColor: '#F5F5F8'
    },
    body:{
        marginTop: 25,
        
    },
    main:{
        width:280,
        height: 45,
        backgroundColor: '#baebff',
        borderRadius: 10,
        marginLeft: 55,
        marginTop: 20
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
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#c4c4c4'
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
    },
    inputPromoMain:{
        width: 348,
        height:50,
        borderRadius: 15,
        marginBottom: 15,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#c2c2c2'
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