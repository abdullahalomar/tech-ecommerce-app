import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export default function PopUp() {

    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  return (
    <View>
      <TouchableOpacity 
          style={{marginTop: 40}}
          onPress={toggleModal}
          >
          <Feather name="settings" size={28} color="white" />
          </TouchableOpacity>

          <Modal 
          style={styles.modalBody}
          isVisible={isModalVisible}
          >
          <View style={{}}>
          <Text>Hello!</Text>
        </View>
        <TouchableOpacity
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
        marginVertical: 200
    },
    closeButton:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        
    }
})