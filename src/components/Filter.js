import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import Modal from "react-native-modal";

export default function Filter() {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.body}>
      <TouchableOpacity 
          style={styles.filter}
          onPress={toggleModal}
          >
          <Feather name="filter" size={22} color="#6d7c8f" />
          </TouchableOpacity>

          <Modal 
          style={styles.modalBody}
          isVisible={isModalVisible}
          >
            <Text style={styles.editProfile}>Edit Profile</Text>
          <View style={{}}>
          
        </View>
        <TouchableOpacity
        style={styles.okBox}
          onPress={toggleModal}
          >
            <Text style={styles.closeButton}>Ok</Text>
          </TouchableOpacity>
      </Modal>
    </View>
  )
}

const styles =StyleSheet.create({
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


    filter:{
        borderLeftWidth: 0.7,
        borderRightWidth: 0.7,
        borderRightColor: '#87888a',
        borderLeftColor: '#87888a',
        paddingHorizontal: 10,
      },
})