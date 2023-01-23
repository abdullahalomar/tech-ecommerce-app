import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Gadget from '../../assets/gadget.png'
import Laptop from '../../assets/laptop.png'
import Headphone from '../../assets/headphone.png'
import airPod from '../../assets/airpod.png'
import huaweiLaptop from '../../assets/huaweiLaptop.png'
import soundBox from '../../assets/soundBox.png'
import { Entypo } from '@expo/vector-icons';
import homebg from '../../assets/homebg.png'
import MenubarScreen from '../components/MenubarScreen'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';




export default function homeScreen({navigation, result}) {

   const [apidata,setApiData] = useState([]);
   useEffect(()=>{
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response=>response.json())
      .then(data =>setApiData(data))
   },[])
   console.log(apidata)
    const DATA = [
        {
          title: "Technology",
        },
        {
          title: "Fashion",
        },
        {
          title: "Sports",
        },
        {
          title: "Home",
        },
      ];

      const [term, setTerm] = useState('');
      const [searchApi, results, errorMessage] = useResults();

      console.log(results);
      const filterResultByPrice = (price) => {
            return results.filter(result => {
               return result.price === price;
            })
      };
     
      

  return (
   <MenubarScreen navigation={navigation}>
    <View style={styles.bg}>
      
    <SearchBar 
      term={term} 
      onTermChange={setTerm}
      onTermSubmit={()=> searchApi(term)}
      />
      <ScrollView>
      <View style={styles.body}>
     {/* {errorMessage ? <Text>{errorMessage}</Text> : null} */}

<View>
   <Image
   style={{width: 360, height: 179, marginTop: 10}}
   source={homebg}
   >
   </Image>
   <Text style={styles.valid}>*Valid from 27/03 to 01/04 2022. Min stock: 1 unit</Text>
</View>


  <View style={styles.flat}>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={DATA => DATA.title}
      data={DATA}
      renderItem={({ item }) => {
          return (
          <Text style={styles.listItem}>{item.title}</Text>
          )
      }}
      ></FlatList>
  </View>
  
  <View>
      <View style={styles.thirdSection}>
          <Text style={styles.sale}>Hot Sales</Text>
          <View style={styles.dotFlex}>
              <View style={styles.firstDot}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
          </View>
      </View>

      <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      >
      <View style={styles.forthSection}>
      </View>
      </ScrollView>
      
  </View>

  <ResultsList 
  
  results={apidata}
  navigation={navigation}
  />
  <ResultsList 
  title='Recently Viewed'
  results={apidata}
  />
</View>
      </ScrollView>

    </View>
    </MenubarScreen>
  )
}

const styles = StyleSheet.create({
   bg:{
      width: '100%',
      height: '100%',
      backgroundColor: '#E5E5E5'
   },
    body:{
        marginHorizontal: 17,
        marginTop: 10,
     },
     valid:{
        paddingLeft: 75,
        fontSize: 10,
        fontWeight: '400',
        position: 'absolute',
        marginTop: 175
     },
     listItem:{
        marginHorizontal: 10,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontSize: 15,
        borderRadius: 14,
        fontWeight: '600',
        borderWidth: 1,
        borderColor: '#CFCFCF80',
        marginTop: 10,
        marginBottom: 10,
        letterSpacing: 1
     },
     sale:{
        fontSize:18,
        fontWeight: '800',
        color: '#343A40'
     },
     thirdSection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 3,
        marginBottom: 5
     },
     firstDot:{
        width:20,
        height: 5,
        backgroundColor: '#5351db',
        borderRadius: 10
     },
     dot:{
        width:5,
        height: 5,
        backgroundColor: 'gray',
        marginLeft: 10,
        borderRadius: 10
     },
     dotFlex:{
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 25
     },
     forthSection:{
        flexDirection: 'row', 
     },
     
})