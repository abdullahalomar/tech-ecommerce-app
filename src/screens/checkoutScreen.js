import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import headP from '../../assets/headPhonep.png'
import { AntDesign } from '@expo/vector-icons';
import Vector from '../../assets/Vector.png'
import Visa from '../../assets/visa.png'
import { color } from 'react-native-reanimated';
import googlePay from '../../assets/google-pay.png'
import applePay from '../../assets/apple-pay.png'
import payPal from '../../assets/paypal.png'


export default function checkoutScreen({navigation}) {

    const [delivery, setDelivery] = useState(0)

    const [visa, setVisa] = useState(0)

  return (
    <View style={styles.background}>
        <View style={styles.firstSection}>
        <View style={styles.firstIcon}>
        <MaterialIcons style={styles.arrow} name="keyboard-arrow-left" size={25} color="#CFCFCF" />
        </View>
        <Text style={styles.firstText}>Checkout</Text>
        </View>

        <View style={styles.secondSection}>
            <LinearGradient
        colors={['#FFFFFF', '#E5E5E5']}
        style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image
        style={styles.headPh}
        source={headP}
        ></Image>
      </LinearGradient>
            <View style={styles.textTwo}>
                <Text style={styles.sony}>Sony WH-1000XM4</Text>
                <Text style={styles.par}>$ 4.999</Text>
            </View>
        </View>

        <View style={styles.thirdSection}>
            <Text style={styles.ship}>Shipping method</Text>
            <View style={styles.shippingBox}>
                     <TouchableOpacity 
                style={delivery == 0 ? styles.home : {width:"50%"}}
                onPress={()=>setDelivery(0)}
                >
                    <Text style={delivery == 0 ? styles.homeText :styles.pickText}>Home delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                
                style={delivery == 1 ? styles.home : {width:"50%"}}
                onPress={()=>setDelivery(1)}
                >
                    <Text style={delivery == 1 ? styles.homeText :styles.pickText}>Pick up in store</Text>
                </TouchableOpacity>
            </View>
        </View>


        <Text style={styles.payment}>Select your payment method</Text>
        <ScrollView 
        showsHorizontalScrollIndicator={false}
        horizontal 
        style={styles.forthSection}>
            
            
            <View style={styles.visaSecMain}>
            <View 
            style={styles.main}
            onPress
            >
            <View style={styles.visaSection}>
            <Image
            style={styles.visa}
            source={Visa}
            ></Image>
            <AntDesign style={styles.check} name="checkcircle" size={24} color="white" />
            </View>
            
            <Text style={styles.number}>**** **** **** 1921</Text>
            <View style={styles.vectorSec}>
                <Image
                style={styles.vec}
                source={Vector}
                ></Image>
                <Text style={styles.num}>07/25</Text>
            </View>
            </View>
            <View style={styles.visaSecTwo}>
                <Image
                style={styles.visaTwo}
                source={Visa}
                ></Image>
                <Text style={styles.numberTwo}>**** **** **** 1921</Text>
                <Image
                style={styles.vecTwo}
                source={Vector}
                ></Image>
            </View>
            </View>
        </ScrollView>

        <View style={styles.fifthSection}>
            <Text style={styles.add}>+ Add new</Text>
            <View style={styles.payMain}>
                <View style={styles.gPay}>
                    <Image
                    style={{marginTop: 4, marginLeft: 22}}
                    source={googlePay}
                    ></Image>
                </View>
                <View style={styles.gPay}>
                <Image
                style={{marginLeft: 22, marginTop: 4}}
                source={applePay}
                ></Image>
                </View>
                <View style={styles.gPay}>
                <Image
                style={{marginLeft: 35, marginTop: 14, width: 26, height: 26}}
                source={payPal}
                ></Image>
                </View>
            </View>
        </View>

        <LinearGradient 
        style={styles.lastSection}
        colors={[ '#C4ECFC', '#FFFFFF', ]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        >
            
            <View style={{marginTop:15}}>
            <View style={styles.lstFlx}>
                <Text style={styles.lstText}>Subtotal (2 items)</Text>
                <Text style={styles.lstText}>$ 4.999</Text>
            </View>
            <View style={styles.lstFlx}>
                <Text style={styles.lstText}>Shipping cost</Text>
                <Text style={styles.lstText}>Free</Text>
            </View>
            </View>
            <View style={styles.lstFlx}>
                <Text style={styles.lstTextB}>Total</Text>
                <Text style={styles.lstTextB}>$ 4.999</Text>
            </View>
           <TouchableOpacity 
           style={styles.button}
           onPress={()=> navigation.navigate('Home')}
           >
                <Text style={styles.btnTExt}>Finalize Purchase</Text>
           </TouchableOpacity>
        </LinearGradient>

    </View>
  )
}

const styles = StyleSheet.create({
    background:{
       
        height: '75%'
    },
    arrow:{
        marginLeft: 10,
        marginTop: 11
    },
    firstIcon:{
        width: 47,
        height: 47,
        backgroundColor: 'white',
        borderRadius: 30,
        marginLeft: 16 
    },
    firstText:{
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 15,
        marginTop: 12
    },
    firstSection:{
        flexDirection: 'row',
        marginTop: 15
    },
    container:{
        width: 112,
        height: 112,
        borderRadius: 10,
        marginTop: 15,
    },
    
    headPh:{
        width: 120,
        height: 120,
    },
    secondSection:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 35,
        elevation: 50
    },
    textTwo:{
        marginLeft: 20
    },
    sony:{
        fontSize: 22,
        fontWeight: '600',
        color: '#343A40'
    },
    par:{
        fontSize: 20,
        fontWeight: '600',
        color: '#ef9534'
    },
    ship:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3F4343',
        marginBottom: 11,
    },
    shippingBox:{
        width: 358,
        height: 37,
        backgroundColor: '#3F4343',
        borderRadius: 21.5,
        opacity: 0.8,
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },
    thirdSection:{
        marginLeft: 16,
        marginTop: 23
    },
    home:{
        width: '48%',
        height: 31,
        backgroundColor: '#FFFFFF',
        borderRadius: 18.5,
        marginTop: 3,
    
    },
    homeText:{
        fontWeight: '400',
        color: '#3F4343',
        marginLeft: 50,
        marginTop: 4.5
    },
    pickText:{
        fontWeight: '400',
        color: 'white',
        marginLeft: 50,
        marginTop: 7
    },
    forthSection:{
        marginHorizontal: 16,
        marginTop: 15,
        
    },
    payment:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#343A40',
        marginBottom: 1,
        marginTop: 10,
        marginHorizontal: 18
    },
    main:{
        width: 213,
        height: 148,
        borderRadius: 20,
        backgroundColor: '#E27BC1',
        opacity: 0.7,
    },
    visaSection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    visa:{
        marginLeft: 16,
        marginTop: 10
    },
    check:{
        marginRight: 14,
        marginTop: 17
    },
    number:{
        fontWeight: '500',
        color: 'white',
        marginLeft: 16,
        marginVertical: 8
    },
    vectorSec:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    vec:{
        marginTop: 19,
        marginLeft: 16
    },
    num:{
        marginTop: 19,
        marginRight: 16,
        fontWeight: '500',
        color: 'white'
    },
    visaSecTwo:{
        width: 213,
        height: 132,
        backgroundColor: '#A280C1',
        borderRadius: 20,
        opacity: 0.7,
        marginLeft: 13
    },
    visaSecMain:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    visaTwo:{
        marginLeft: 16,
        marginTop: 10
    },
    vecTwo:{
        marginTop: 19,
        marginLeft: 16
    },
    numberTwo:{
        fontWeight: '500',
        color: 'white',
        marginLeft: 16,
        marginVertical: 1
    },
    add:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#343A40',
        marginBottom: 8
    },
    payMain:{
        flexDirection: 'row',
    },
    gPay:{
        width: 95,
        height: 55,
        backgroundColor: 'white',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#CFCFCF',
        marginRight: 8
    },
    fifthSection:{
        marginLeft: 16,
        marginTop: 14
    },
    lastSection:{
        width: 390,
        height: 180,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 18,
        position: 'absolute',
        marginTop: '150%',
        elevation: 7
    },
    lstFlx:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        marginTop: 5
    },
    lstText:{
        
        fontWeight: '700',
        color: '#3F4343',
    },
    lstTextB:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3F4343',
        marginTop: 3,
        marginBottom: 9,
        color: '#3F4343',
    },
    button:{
        width: 321,
        height: 48,
        backgroundColor: '#6d6bed',
        borderRadius: 80,
        marginLeft: 33,
    },
    btnTExt:{
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        marginLeft: 108,
        marginTop: 9
    }
})