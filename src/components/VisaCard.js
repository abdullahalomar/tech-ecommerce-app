import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import visaImg from '../../assets/visa.png'
import { AntDesign } from '@expo/vector-icons';
import Vector from '../../assets/Vector.png'
import Modal from "react-native-modal";
import { Zocial } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Master from '../../assets/icons/icons8-mastercard-48.png'
import visa from '../../assets/icons/icons8-visa-48.png'
import gPay from '../../assets/icons/google-pay.png'
import payPal from '../../assets/icons/paypal.png'
import { Feather } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements'

export default function VisaCard() {

    const [isModalVisible, setModalVisible] = useState(false);
    const [isCheck, setIsCheck] = useState(false)
    const [isCheckTwo, setIsCheckTwo] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

  return (
    <View>
      <View style={styles.visaSecMain}>
                
                <TouchableOpacity
                style={styles.main}
                onPress={toggleModal}
                >
                <View style={{}}>
                <View style={styles.visaSection}>
                <Image
                style={styles.visa}
                source={visaImg}
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
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.visaSecTwo}>
                    <Image
                    style={styles.visaTwo}
                    source={visaImg}
                    ></Image>
                    <Text style={styles.numberTwo}>**** **** **** 1921</Text>
                    <Image
                    style={styles.vecTwo}
                    source={Vector}
                    ></Image>
                </TouchableOpacity>
                </View>


                {/* modal */}
                <Modal 
          style={styles.modalBody}
          isVisible={isModalVisible}
          >
            <View style={styles.header}>
            <View style={{paddingVertical: 20}}>

            <View style={{flexDirection: 'row', justifyContent: 'space-around', }}>
            <TouchableOpacity
                style={{}}
                onPress={toggleModal}
            >
            <Feather name="chevron-left" size={30} color="white" />
          </TouchableOpacity>
            <Text style={styles.editProfile}>Payment Information</Text>
            <View></View>
            </View>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <View>
          <Zocial name="guest" size={30} color="white" />
          <Text style={styles.text}>GUEST INFO</Text>
          </View>
          <View>
          <MaterialIcons name="payment" size={30} color="white" />
          <Text style={styles.text}>PAYMENT</Text>
          </View>
          <View>
          <MaterialCommunityIcons name="message-reply-text-outline" size={30} color="white" />
          <Text style={styles.text}>SUCCESS</Text>
          </View>
        </View>
            </View>
            </View>

            <View style={styles.selectCard}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <AntDesign name="checkcircle" size={24} color="#7da4e3" />
            <Text style={{fontWeight: '700', fontSize: 15, paddingLeft: 8}}>Credit Card</Text>
            </View>
           <View>
            <View style={{flexDirection: 'row', }}>
            <TouchableOpacity>
            <Image
            source={Master}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image
            source={visa}
            />
            </TouchableOpacity>
            </View>
            </View> 
            </View> 

            <View style={{marginHorizontal: 15, marginBottom: 30}}>
                <Text>Card Number</Text> 
                <TextInput
                style={styles.inputLine}
                />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                <View>
                <Text>Security Code</Text> 
                <TextInput
                style={styles.inputLine}
                />
                </View>
                <View>
                <Text>Expire Date</Text> 
                <TextInput
                style={styles.inputLine}
                />
                </View>
                </View>
            </View>

            <View style={{marginTop: 5}}>
            <View style={styles.payContainer}>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                style={styles.checkBox}
                    center
                    uncheckedIcon='square'
                    checked = {isCheck}
                    onPress={()=>{
                        alert
                        setIsCheck(!isCheck)
                    }}
                />
                    <Text>Google Pay</Text>
                </View>
                <Image
                source={gPay}
                />
            </View>
            <View style={styles.payContainer}>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                style={styles.checkBox}
                    center
                    uncheckedIcon='square'
                    checked = {isCheckTwo}
                    onPress={()=>{
                        alert
                        setIsCheckTwo(!isCheckTwo)
                    }}
                />
                    <Text>Paypal</Text>
                </View>
                <Image
                source={payPal}
                />
            </View>
            </View>

        <TouchableOpacity
        style={styles.conformButton}
          onPress={toggleModal}
          >
            <Text style={styles.closeButton}>CONFIRM PAYMENT</Text>
          </TouchableOpacity>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    // modal
    modalBody:{
        width: '90%',
        backgroundColor: 'white',
        marginHorizontal: 21,
        borderRadius: 20,
        marginVertical: 70
    },
    closeButton:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
        color: 'white'
    },
    conformButton: {
        width: '80%',
        height: '8%',
        backgroundColor: '#7da4e3',
        marginBottom: 30,
        marginHorizontal: 35,
        borderRadius: 20
    },
    editProfile:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20 
    }, 
    header: {
        backgroundColor: '#7da4e3',
        marginBottom: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    text:{
        color: 'white',
    }, 
    selectCard:{
        flexDirection: 'row', 
        justifyContent: 'space-around',
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 30
    },
    inputLine:{
        borderBottomWidth: 0.5,
    },

    checkBoxContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    payContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginHorizontal: 15,
        borderWidth: 2,
        borderRadius: 5,
        paddingRight: 10,
        marginBottom: 31
    },
    checkBox:{
        color: 'red'
    },

//    modal


    visaSecMain:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    main:{
        width: 213,
        height: 135,
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
    numberTwo:{
        fontWeight: '500',
        color: 'white',
        marginLeft: 16,
        marginVertical: 1
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
   
    visaTwo:{
        marginLeft: 16,
        marginTop: 10
    },
    vecTwo:{
        marginTop: 19,
        marginLeft: 16
    },

      
})