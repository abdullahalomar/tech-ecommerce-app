import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Item from '../components/Item';
import MenubarScreen from '../components/MenubarScreen';
import useCategory from '../hooks/useCategory';
import Searchbar from '../components/SearchBar';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Button,
  DrawerLayoutAndroid,
  
} from 'react-native';
import Filter from '../components/Filter';

export default function shopScreen({navigation}) {
 
  const [items, setItems] = useState([]);
  const [categories] = useCategory();

  useEffect(()=>{
     fetch('https://fakestoreapi.com/products')
     .then(response=>response.json())
     .then(data => setItems(data))
  },[])

  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  
  return (
    <MenubarScreen navigation={navigation}>
      <View>
        {/* <Searchbar/> */}
        
        
        <View style={styles.filterBox}>
            <Text style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '600', color: '#6d7c8f'}}>All</Text>
          <View style={styles.iconBox}>
          <TouchableOpacity 
          style={styles.ship}
          
          >
          <MaterialIcons name="local-shipping" size={24} color="#6d7c8f" />
          </TouchableOpacity>
          <Filter/>
          <TouchableOpacity style={styles.grid}>
          <MaterialIcons name="view-list" size={24} color="#6d7c8f" />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.gridFull}>
          <Feather name="grid" size={20} color="#6d7c8f" />
          </TouchableOpacity> */}
          </View>
          
        </View>

       

       <View style={styles.flexBox}>
        {/* <View style={styles.category}>
            <Text style={styles.categoryText}>Categories</Text>
            <TouchableOpacity>
            </TouchableOpacity>
            {
              categories.map(category => <Category
              key={category.id}
              category={category}
              ></Category>)
            }
        </View> */}
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
      
       </View>
    </View>
    </MenubarScreen>
  )
}

const styles = StyleSheet.create({
  flexBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
  },
  cartBox: {
    marginVertical: 15,
    marginLeft: 15,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center'
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
  },

  filterBox:{
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 15,
    marginTop: 18
  },
  iconBox:{
    flexDirection: 'row',
    
  },
  
  ship:{
    paddingHorizontal: 10
  },
  grid:{
    paddingHorizontal: 10
  },
  gridFull:{
    paddingHorizontal: 10
  },




  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
})