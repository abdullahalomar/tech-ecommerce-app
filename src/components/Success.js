import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";

export default function Success({navigation}) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

  return (
    <View>
            <TouchableOpacity 
           style={styles.button}
           onPress={toggleModal}
           >
                <View></View>
                <Text style={styles.btnTExt}>Finalize Purchase</Text>
                <View></View>
           </TouchableOpacity>
        <View style={{}}>
        <Modal 
          style={styles.modalBody}
          isVisible={isModalVisible}
          >
          <View style={{marginTop: 35}}>
            <Image style={{width: 200, height: 240, marginTop: 40, marginBottom: 15, marginHorizontal: 75}} source={{uri: 'https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif'}}/>
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '700'}}>Order Placed!!</Text>
            <Text style={{textAlign: 'center', marginVertical: 15}}>Your order has been successfully placed!</Text>

        <TouchableOpacity 
            style={{}}
            onPress={()=> navigation.navigate('Shop')}>
      <Text style={{
          textAlign: 'center',
          marginHorizontal: 85,
          paddingVertical: 10,
          backgroundColor: '#6895cc',
          borderRadius: 20,
          marginVertical: 10,
          fontSize: 17,
          fontWeight: '700',
          color: 'white'
      }}>CONTINUE SHOPPING</Text>
    </TouchableOpacity>

    <TouchableOpacity 
        style={{}}>
      <Text style={{
          textAlign: 'center',
          marginHorizontal: 85,
          paddingVertical: 10,
          backgroundColor: '#6895cc',
          borderRadius: 20,
          marginTop: 10,
          marginBottom: 60,
          fontSize: 17,
          fontWeight: '700',
          color: 'white'
      }}>VIEW ALL ORDERS</Text>
</TouchableOpacity>
</View> 
       
      </Modal>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    modalBody:{
        width: '90%',
        backgroundColor: 'white',
        marginHorizontal: 20,
        borderRadius: 20,
        marginVertical: 50,
        position: 'absolute'
    },
    closeButton:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 4,
        color: 'white'
    },
    okBox: {
        width: 176,
        height: 40,
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




    button:{
        width: 321,
        height: 48,
        backgroundColor: '#6895cc',
        borderRadius: 80,
        marginLeft: 33,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTExt:{
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
})

  