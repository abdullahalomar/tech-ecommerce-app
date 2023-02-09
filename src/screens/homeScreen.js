import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MenubarScreen from '../components/MenubarScreen'
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';
import useCategory from '../hooks/useCategory';
import useProduct from '../hooks/useProduct';
import ResultDetail from '../components/ResultDetail';
import ResultDetailRecent from '../components/ResultDetailRecent';
import Slider from '../components/Slider';


export default function homeScreen({navigation}) {

   const [category, setCategory] = useState(null)
   const [apidata, setApiData] = useState([]);
   const categories = useCategory();
   const {data,loading,error} = useProduct(category);

  
      const [term, setTerm] = useState('');
      // console.log(results);
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
      navigation={navigation}
      />
      <ScrollView>


<View style={styles.body}>
<View>
   {/* <Image
   style={{width: 360, height: 205, marginTop: 10,}}
   source={require('../../assets/video/heading.gif')}
   >
   </Image> */}
   <Slider/>
 
</View>


  <ScrollView 
  horizontal 
  style={styles.flat}
  showsHorizontalScrollIndicator={false}
  >
   {
      categories.loading == false && categories.data.map((category,id) => <Category
      key={id}
      category={category}
      filter={setCategory}
      />)
   }
  </ScrollView>
  
  <View>
      <View style={styles.thirdSection}>
          <Text style={styles.sale}>Hot Sales</Text>
          <TouchableOpacity 
          style={styles.dotFlex}
          onPress={()=> navigation.navigate('Shop')}
          >
              <Text style={styles.seeMore}>See more</Text>
          </TouchableOpacity>
      </View>
  </View>

  <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  >
  {
   loading == false && data.map((result, id) => <ResultDetail
   key={id}
   result={result}
   navigation={navigation}
   />)
  }
  </ScrollView>
  
  <View style={{marginTop: 20, marginBottom: 10}}>
          <Text style={styles.sale}>Recently Viewed</Text>
      </View>
      <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  >
  {
   loading == false && data.map((result, id) => <ResultDetailRecent
   key={id}
   result={result}
   navigation={navigation}
   />)
  }
  </ScrollView>
</View>
      </ScrollView>

    </View>
    </MenubarScreen>
  )
}

const styles = StyleSheet.create({
   bg:{
      width: '100%',
      height: '94.7%',
      // backgroundColor: '#E5E5E5'
   },
    body:{
        marginHorizontal: 17,
        marginTop: 10,
     },
     valid:{
        paddingLeft: 60,
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
        fontSize:19,
        fontWeight: '700',
        color: '#343A40'
     },
     thirdSection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 3,
        marginTop: 5,
        marginBottom: 10
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
     seeMore:{
         fontSize: 16,
         fontWeight: '600',
         color: '#464747',
        
     },
     flat:{
         marginTop: 20,
         marginBottom: 10,
     }
})