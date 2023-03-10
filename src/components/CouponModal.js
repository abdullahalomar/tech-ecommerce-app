import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import { StyleSheet } from 'react-native';
import coupon from '../../assets/icons/coupon.png'
import { Image } from 'react-native';

export default function CouponModal() {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

  return (
    <View style={styles.body}>
      <TouchableOpacity 
      style={styles.option}
      onPress={toggleModal}
      >
      <Image style={{width: 35, height: 30}} source={coupon}/>
      <Text style={styles.title}>Coupon</Text>
      </TouchableOpacity>

          <Modal 
          style={styles.modalBody}
          isVisible={isModalVisible}
          >
            <Text style={styles.editProfile}>Coupon For Discount</Text>
          <View style={{marginHorizontal: 12}}>
         <Image style={styles.couponCode} source={require('../../assets/video/coupon.gif')}/>
        </View>
        <TouchableOpacity
        style={styles.okBox}
          onPress={toggleModal}
          >
            <Text style={styles.closeButton}>Continue Shopping</Text>
          </TouchableOpacity>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    modalBody:{
        width: '75%',
        backgroundColor: 'white',
        marginHorizontal: 50,
        borderRadius: 20,
        marginVertical: 200,
        position: 'absolute'
    },
    closeButton:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5,
        color: 'white'
    },
    okBox: {
        width: 176,
        backgroundColor: '#7da4e3',
        marginTop: 30,
        marginHorizontal: 60,
        borderRadius: 20,
        marginBottom: 25
    },
    editProfile:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#5585d4',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 25 
    },
    title: {
      fontSize: 13,
      color: '#5d6063',
  },
  option:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15
},
couponCode:{
  width: 270,
  height: 360,
}
})