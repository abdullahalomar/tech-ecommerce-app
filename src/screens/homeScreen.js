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
     search:{
         marginTop: 14,
         marginRight: 15,
         marginLeft: 12
     },
     inputBox:{
         backgroundColor: 'white',
         borderRadius: 30,
         width: 300,
         height: 50,
         flexDirection: 'row',
     },
     firstFlex:{
         flexDirection: 'row',
     },
     bell:{
         marginLeft: 10,
         width: 50,
         height: 50,
         backgroundColor: 'white' ,
         borderRadius: 100,
     },
     bellIcon:{
         marginTop: 5,
         marginLeft: 15,
     },
     bulletPoint:{
         width: 10,
         height: 10,
         backgroundColor: '#FF5500',
         borderRadius: 100,
         marginLeft: 35
     },
     gradientBox:{
        marginTop: 20,
     },
     gadget:{
        width: 210,
        height: 170,
        marginLeft: 22
     },
     sectionTwo:{
        flexDirection: 'row',
        
     },
     background:{
       borderRadius: 30,
       width: 358,
       height: 149,
     },
     cyber:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#F4BD46'
     },
     linio:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#F4BD46',
        lineHeight: 25
     },
     forty:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
     },
     textBox:{
        paddingTop: 5,
        paddingLeft: 30,
     },
     discount:{
        fontSize: 10,
        color: 'white',
     },
     
     technology:{
        fontSize: 17,
        color: 'white',
        lineHeight: 15
     },
     shipping:{
        color: '#FF5500',
        paddingHorizontal: 7,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 7,
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
     laptopBox:{
        width: 140,
        height: 152,
        backgroundColor: '#CFCFCF',
        borderRadius: 10,
        marginRight: 10
     },
     badge:{
        backgroundColor: 'white',
        marginTop: 10,
        marginRight: 66,
        marginLeft: 5,
        borderRadius: 10
     },
     badgeText:{
        paddingLeft: 10,
        paddingBottom: 3,
        color: '#FF5500',
        fontSize: 10,
        fontWeight: '400'
     },
     nameTitle:{
        fontSize: 13,
        fontWeight: '700',
        color: '#343A40',
        textAlign: 'center',
     },
     priceTitle:{
        fontSize: 18,
        fontWeight: '900',
        color: '#343A40',
      textAlign: 'center'
     },
     titleHeader:{
        marginBottom: 10,
        marginLeft: 1
     },
     laptop:{
        marginLeft: 30,
        marginTop: 14,
        width: 80,
        height: 60
     },
     headphone:{
        marginLeft: 35,
        marginTop: 5,
        width: 70,
        height: 70
     },
     airPod:{
        marginLeft: 30,
        marginTop: 5,
        width: 70,
        height: 70
     },
     forthSection:{
        flexDirection: 'row',
        
     },
     recent:{
        flexDirection: 'row',
        
     },
     huawei:{
        backgroundColor: '#f0bbeb',
        width: 169,
        height: 155,
        marginRight: 10,
      //   borderTopLeftRadius: 10,
      //   borderTopRightRadius: 10,
        borderRadius: 10
     },
     huaweiFlex:{
        flexDirection: 'row',
        justifyContent: 'space-around'
     },
     sound:{
        backgroundColor: '#c1abc9',
        width: 169,
        height: 155,
        marginLeft: 10,
      //   borderTopLeftRadius: 10,
      //   borderTopRightRadius: 10,
      borderRadius: 10,
      marginRight: 7
     },
     huaLap:{
        marginLeft: 30,
        marginTop:18,
        width: 90,
        height: 70
     },
     soundBoxHua:{
        marginLeft: 23,
        marginTop:28,
        width: 130,
        height: 60
     },
     soundBox:{
        marginTop: 15,
        marginRight: 20
     },
     heart:{
        marginLeft: 4.5,
        marginTop: 5
     },
     heartBox:{
        width: 24,
        height: 24,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 10,
        marginRight: 1
     },
     heartBoxSound:{
        width: 24,
        height: 24,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 10,
        marginRight: 17
     },
     textTitleHuawei:{
        fontSize: 13,
        fontWeight: '700',
        color: '#343A40',
        textAlign: 'center'
     },
     textTitlePrice:{
        fontSize: 18,
        fontWeight: '900',
        color: '#343A40',
        textAlign: 'center'
     },
     recentViewed:{
      fontSize:18,
      fontWeight: '800',
      color: '#343A40',
      marginTop: 10
     },
     fifthSection:{
        marginTop: 9
     },
     
     lastSection:{
        width: 390,
        height: 100,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'absolute',
        marginTop: 666,
        opacity: 0.5
     },
     last:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
     },
     homeIcon:{
        flexDirection: 'row',
     },
     home:{
      //   fontSize: 15,
      //   fontWeight: 'bold',
      //   marginLeft: 8,
      //   marginTop: 9,
      //   color: '#FF5500'
     },
   //   homeIc:{
   //      marginLeft: 24,
   //      marginTop: 8,
   //      width: 21.38,
   //      height: 22.5
   //   }
})