import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Item from '../components/Item';
import MenubarScreen from '../components/MenubarScreen';
import useCategory from '../hooks/useCategory';
import Searchbar from '../components/SearchBar';
import { MaterialIcons,Feather } from '@expo/vector-icons';

import {
  Button,
  
} from 'react-native';
import Filter from '../components/Filter';
import ItemGrid from '../components/ItemGrid';

export default function shopScreen({navigation}) {
 
  const [items, setItems] = useState([]);
  const [categories] = useCategory();
 
  const [isGrid, setIsGrid] = useState(true)
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
        <Searchbar navigation={navigation}/>
        
        
        <View style={styles.filterBox}>
            <Text style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '600', color: '#6d7c8f'}}>All</Text>
          <View style={styles.iconBox}>
          <TouchableOpacity 
          style={styles.ship}
          onPress={()=> navigation.navigate('Order')}
          >
          <MaterialIcons name="local-shipping" size={24} color="#6d7c8f" />
          </TouchableOpacity>
          <Filter setItems={setItems}/>
          {
            isGrid ? (
              <TouchableOpacity style={styles.grid} onPress={()=>setIsGrid(false)}>
              <MaterialIcons name="view-list" size={24} color="#6d7c8f" />
              </TouchableOpacity>
            ) :
            (
              <TouchableOpacity style={styles.gridFull} onPress={()=>setIsGrid(true)}>
              <Feather name="grid" size={20} color="#6d7c8f" />
              </TouchableOpacity>
            )
          }
        
        
          </View>
          
        </View>
        {isGrid ? (   <View style={styles.flexBox}>
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
      
       </View>) : ( <View style={styles.GridBox}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.cartBoxGrid}>
        {
          items.map(item => <ItemGrid
          key={item.id}
          item={item}
          ></ItemGrid>)
        }
        </View>
        </ScrollView>
      
       </View>)}
    
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

  GridBox:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 15,
  },
  cartBoxGrid: {
    marginVertical: 15,
    marginLeft: 15,
  
    
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