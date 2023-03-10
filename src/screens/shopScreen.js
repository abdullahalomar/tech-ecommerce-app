import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
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
import useProductData from '../hooks/useProduct';
import { log } from 'react-native-reanimated';
import useSingleProduct from '../hooks/useSingleProduct';
import Loading from '../components/Loading';

export default function shopScreen({navigation}) {

  const [category, setCategory] = useState(null)
  const categories = useCategory();
  const products = useProductData(category);
  const [isGrid, setIsGrid] = useState(true)
  const singleProducts = useSingleProduct()
  

  return (
    <MenubarScreen navigation={navigation}>
      <View>
        <Searchbar navigation={navigation}/>
        
        
        <View style={styles.filterBox}>
            <TouchableOpacity
            onPress={()=> setCategory(null)}
            >
            <Text style={{paddingHorizontal: 10, fontSize: 17, fontWeight: '600', color: '#6d7c8f'}}>All</Text>
            </TouchableOpacity>
          <View style={styles.iconBox}>
          <TouchableOpacity 
          style={styles.ship}
          onPress={()=> navigation.navigate('Order')}
          >
          <MaterialIcons name="local-shipping" size={24} color="#6d7c8f" />
          </TouchableOpacity>
          <Filter setCategory={setCategory}/>
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

          <View style={{marginBottom: 440}}>
          {
            singleProducts.loading == false ? 
            (
              <ScrollView>
        {isGrid ? (   <View style={styles.flexBox}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.cartBox}>
        {
          products.loading == false && products.data.map(item => <Item
          key={item.id}
          item={item}
          navigation={navigation}
          ></Item>)
        }
        </View>
        </ScrollView>
      
       </View>) : ( <View style={{paddingBottom: 60}}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.cartBoxGrid}>
        {
          products.loading == false && products.data.map(item => <ItemGrid
          key={item.id}
          item={item}
          navigation={navigation}
          ></ItemGrid>)
        }
        </View>
        </ScrollView>
      
       </View>)}
        </ScrollView>
            ) : <Loading/>
          }
          </View>
  
    </View>
    </MenubarScreen>
  )
}

const styles = StyleSheet.create({
  flexBox:{
    marginHorizontal: 10,
    paddingBottom: 35
  },
  cartBox: {
    marginVertical: 15,
    flexDirection: 'row',
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
    marginHorizontal: 20
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