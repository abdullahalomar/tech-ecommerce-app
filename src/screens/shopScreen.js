import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Item from '../components/Item';
import MenubarScreen from '../components/MenubarScreen';


export default function shopScreen({navigation}) {

  const [items,setItems] = useState([]);

  useEffect(()=>{
     fetch('https://api.escuelajs.co/api/v1/products')
     .then(response=>response.json())
     .then(data =>setItems(data))
  },[])

  return (
    <MenubarScreen navigation={navigation}>
      <View>
       <View style={styles.flexBox}>
        <View style={styles.category}>
            <Text style={styles.categoryText}>Categories</Text>
            <TouchableOpacity>
            <Text style={styles.categoryTitle}>dfg</Text>
            </TouchableOpacity>
        </View>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.cartBox}>
        {
          items.map(item => <Item
          key={item.id}
          item={item}
          ></Item>)
        }
        </View>
        </ScrollView>
        <ScrollView>
          <View style={styles.cartBox}>
        {
          items.map(item => <Item
          key={item.id}
          item={item}
          ></Item>)
        }
        </View>
        </ScrollView>
       </View>
    </View>
    </MenubarScreen>
  )
}

const styles = StyleSheet.create({
  flexBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15
  },
  cartBox: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  category:{
    backgroundColor: '#a9c2d9',
    
  },
  categoryText: {
    marginHorizontal: 10, 
    marginVertical: 20, 
    fontSize: 15, 
    fontWeight: '600', 
    color: 'white'
  },
  categoryTitle:{
    color: 'white',
    marginHorizontal: 10
  }
})