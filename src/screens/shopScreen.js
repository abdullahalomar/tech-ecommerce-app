import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Item from '../components/Item';
import MenubarScreen from '../components/MenubarScreen';
import Category from '../components/Category';
import useCategory from '../hooks/useCategory';
import Searchbar from '../components/SearchBar';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function shopScreen({navigation}) {
 
  const [items, setItems] = useState([]);
  const [categories] = useCategory();

  useEffect(()=>{
     fetch('https://fakestoreapi.com/products')
     .then(response=>response.json())
     .then(data => setItems(data))
  },[])
  
  return (
    <MenubarScreen navigation={navigation}>
      <View>
        <Searchbar/>
        <View style={styles.filterBox}>
            <Text style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '600', color: '#6d7c8f'}}>All</Text>
          <View style={styles.iconBox}>
          <TouchableOpacity style={styles.ship}>
          <MaterialIcons name="local-shipping" size={24} color="#6d7c8f" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter}>
          <Feather name="filter" size={24} color="#6d7c8f" />
          </TouchableOpacity>
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
    padding:10,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
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
  filter:{
    borderLeftWidth: 0.7,
    borderRightWidth: 0.7,
    borderRightColor: '#87888a',
    borderLeftColor: '#87888a',
    paddingHorizontal: 10,
  },
  ship:{
    paddingHorizontal: 10
  },
  grid:{
    paddingHorizontal: 10
  },
  gridFull:{
    paddingHorizontal: 10
  }
})