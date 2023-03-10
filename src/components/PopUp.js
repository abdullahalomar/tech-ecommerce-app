import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import ImageUpload from './ImageUpload';


export default function PopUp() {

    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  return (
    <View style={styles.body}>
      <TouchableOpacity 
          style={styles.profileIcon}
          onPress={toggleModal}
          >
          <Feather name="settings" size={24} color="#757678" />
          </TouchableOpacity>

          <Modal 
          style={styles.modalBody}
          isVisible={isModalVisible}
          >
            <Text style={styles.editProfile}>Edit Profile</Text>
          <View style={{}}>
          <ImageUpload/>
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
    profileIcon:{
        
    }
})