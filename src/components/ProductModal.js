import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Modal from "react-native-modal";
import { TouchableOpacity } from 'react-native';

export default function ProductModal({ navigation }) {

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };


      const [singleProducts, setSingleProducts] = useState([])

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${navigation.state.params.id}`)
        .then(Response => Response.json())
        .then(data => setSingleProducts(data))
    },[])
  return (
    <View>
        <View>
        <View style={styles.featured}>
            <TouchableOpacity
            onPress={toggleModal}
            >
                <Image
                    style={styles.headSet}
                source={{uri: singleProducts.image}}
                ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image
                style={styles.headSet}
                source={{uri: singleProducts.image}}
                ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image
                style={styles.headSet}
                source={{uri: singleProducts.image}}
                ></Image>
            </TouchableOpacity>
        </View>
        </View>

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


    // featured
    featured:{
        flexDirection: 'row',
        marginBottom: 20,
        marginHorizontal: 70
    },
    headSet:{
        marginTop: 10,
        marginLeft: 10,
        width: 70,
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#1862db',
    },
})