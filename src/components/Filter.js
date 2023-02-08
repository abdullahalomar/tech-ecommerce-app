import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import Modal from "react-native-modal";
import useCategory from '../hooks/useCategory';
import Category from './Category';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import useProductData from '../hooks/useCategory';

export default function Filter({setCategory}) {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const categories = useCategory();
  

  const categoryHandler = (category) => {
   
    setCategory(category)
  }

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
            {/* category */}
            <View style={styles.category}>
            <Text style={[styles.title, {marginTop: 15}]}>Category</Text>
            
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {
            categories.loading == false && categories.data.map((category,id) => <Category
              key={id}
              category={category}
              filter={categoryHandler}
              ></Category>)
            }
            </View>
        </View>
            {/* category */}

            {/* service */}
            <View style={{marginHorizontal: 10, marginVertical: 15}}>
              <Text style={[styles.title, {marginBottom: 5}]}>Service</Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap' }}>
                <TouchableOpacity style={styles.serviceBox}>
                  <Text style={styles.serviceTitle}>Cash On Delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceBox}>
                  <Text style={styles.serviceTitle}>Fulfilled By Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceBox}>
                  <Text style={styles.serviceTitle}>Free Shipping</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* service */}

            {/* location */}
            <View style={{marginHorizontal: 10}}>
                <Text style={[styles.title, {marginBottom: 10}]}>Location</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  <TouchableOpacity style={styles.locationBox}>
                    <Text style={styles.locationTitle}>Germany</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.locationBox}>
                    <Text style={styles.locationTitle}>Bangladesh</Text>
                  </TouchableOpacity>
                </View>
            </View>
            {/* location */}

            {/* price */}
            <View style={{marginHorizontal: 10, marginVertical: 15}}>
              <Text style={[styles.title, {marginBottom: 5}]}>Price</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextInput placeholder='Min' style={styles.input}/>
                <AntDesign name="minus" size={24} color="#636466" />
                <TextInput placeholder='Max' style={styles.input}/>
              </View>
            </View>
            {/* price */}

            {/* rating */}
            <View style={{marginHorizontal: 10, marginBottom: 20}}>
              <Text style={[styles.title, {marginBottom: 5}]}>Ratting</Text>
              <View style={styles.star}>
                <TouchableOpacity style={styles.str}>
                <AntDesign name="star" size={20} color="#FBC252" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.str}>
                <AntDesign name="star" size={20} color="#FBC252" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.str}>
                <AntDesign name="star" size={20} color="#FBC252" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.str}>
                <AntDesign name="star" size={20} color="#FBC252" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.str}>
                <AntDesign name="star" size={20} color="#FBC252" />
                </TouchableOpacity>
                <Text style={{fontSize: 17, color: '#636466'}}>& UP</Text>
              </View>
            </View>
            {/* rating */}
          
        <TouchableOpacity
          style={styles.closeButton}
          onPress={toggleModal}
          >
            <Text style={{fontSize: 20, fontWeight: '700', textAlign: 'center', color: 'white', paddingVertical: 6}}>Done</Text>
          </TouchableOpacity>
      </Modal>
    </View>
  )
}

const styles =StyleSheet.create({
  modalBody:{
    width: '75%',
    backgroundColor: 'white',
    marginHorizontal: 90,
    borderRadius: 5,
    marginVertical: 130,
    position: 'absolute'
},
closeButton:{
    backgroundColor: '#BFACE2', 
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    // fontSize: 20,
    // fontWeight: 'bold',
    // textAlign: 'center',
    // marginVertical: 4,
    // color: 'white'
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
category:{
    fontSize: 15,
    fontWeight: '500',
    color: '#55585c',
    marginVertical: 10,
    marginHorizontal: 10
},


    filter:{
        borderLeftWidth: 0.7,
        borderRightWidth: 0.7,
        borderRightColor: '#87888a',
        borderLeftColor: '#87888a',
        paddingHorizontal: 10,
      },
      title: { 
        marginBottom: 5, 
        fontSize: 15, 
        fontWeight: '600', 
        
      },
      serviceBox:{
        backgroundColor: '#d5deeb',
        width: '45%',
        borderRadius: 3, 
        marginRight: 10,
        marginVertical: 5, 
      },
      serviceTitle:{
        textAlign: 'center',
        paddingVertical: 8,
      },

      
      locationBox:{
        width: '35%',
        backgroundColor: '#d5deeb',
        borderRadius: 3, 
        marginRight: 10,
        marginVertical: 5, 
      },
      locationTitle:{
        textAlign: 'center',
        paddingVertical: 8,
      },

      input:{
        width: '40%',
        borderWidth: 1,
        borderColor: '#636466',
        paddingHorizontal: 10,
        borderRadius: 10
      },
      star:{
        flexDirection: 'row',
        
      },
      str:{
        paddingRight: 10
      }
})