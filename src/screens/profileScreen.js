import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import man from '../../assets/menavater.png'
import { Feather } from '@expo/vector-icons';
import airpod from '../../assets/airpod.png'
import MenubarScreen from '../components/MenubarScreen';
import NotifyIcon from '../components/NotifyIcon';
import PopUp from '../components/PopUp';





export default function profileScreen({navigation}) {

  

  return (
      <MenubarScreen navigation={navigation}>
    <View style={{width: 408, height: 762}}>
      <View style={styles.firstSection}>
        <View style={styles.firstContent}>
          <View style={{marginTop: 30}}>
          <Image
          style={{width: 80, height: 80, borderRadius: 100, backgroundColor: 'white'}}
          source={man}
          ></Image>
          </View>
          <View style={{marginLeft: 30, marginRight: 70, marginTop: 35}}>
          <Text style={styles.profile}>Profile</Text>
          <Text style={styles.mail}>example@gmail.com</Text>
          </View>
         

          {/* modal */}
          <PopUp/>
          {/* modal */}

        </View>

        {/* notification */}
        <NotifyIcon/>
        {/* notification */}
        
      </View>
      <View style={styles.titleBox}>
      <Text style={styles.title}>Notifications</Text>
      <TouchableOpacity>
      <Text style={styles.titleView}>View all</Text>
      </TouchableOpacity>
      </View>
    <ScrollView>
      
      <View>
      
      <View>
      <View style={{marginTop: 5, marginLeft: 30,}}>
        
      <View style={styles.getSection}>
          <View style={styles.productBox}>
            <Image
            style={styles.productImg}
            source={airpod}
            />
            <View style={{}}>
            <Text style={styles.productName}>FreeBuds Huawei</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.offerPrice}>$ 899</Text>
            <Text style={styles.productPrice}>$ 1,499</Text>
            </View>
          </View>
          <View>
            <Text>-10%</Text>
          </View>
          </View>
          <View style={styles.productBox}>
            <Image
            style={styles.productImg}
            source={airpod}
            />
            <View style={{}}>
            <Text style={styles.productName}>FreeBuds Huawei</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.offerPrice}>$ 899</Text>
            <Text style={styles.productPrice}>$ 1,499</Text>
            </View>
          </View>
          <View>
            <Text>-10%</Text>
          </View>
          </View>
          <View style={styles.productBox}>
            <Image
            style={styles.productImg}
            source={airpod}
            />
            <View style={{}}>
            <Text style={styles.productName}>FreeBuds Huawei</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.offerPrice}>$ 899</Text>
            <Text style={styles.productPrice}>$ 1,499</Text>
            </View>
          </View>
          <View>
            <Text>-10%</Text>
          </View>
          </View>
          <View style={styles.productBox}>
            <Image
            style={styles.productImg}
            source={airpod}
            />
            <View style={{}}>
            <Text style={styles.productName}>FreeBuds Huawei</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.offerPrice}>$ 899</Text>
            <Text style={styles.productPrice}>$ 1,499</Text>
            </View>
          </View>
          <View>
            <Text>-10%</Text>
          </View>
          </View>
          <View style={styles.productBox}>
            <Image
            style={styles.productImg}
            source={airpod}
            />
            <View style={{}}>
            <Text style={styles.productName}>FreeBuds Huawei</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.offerPrice}>$ 899</Text>
            <Text style={styles.productPrice}>$ 1,499</Text>
            </View>
          </View>
          <View>
            <Text>-10%</Text>
          </View>
          </View>
          <View style={styles.productBox}>
            <Image
            style={styles.productImg}
            source={airpod}
            />
            <View style={{}}>
            <Text style={styles.productName}>FreeBuds Huawei</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.offerPrice}>$ 899</Text>
            <Text style={styles.productPrice}>$ 1,499</Text>
            </View>
          </View>
          <View>
            <Text>-10%</Text>
          </View>
          </View>
          <View style={styles.productBox}>
            <Image
            style={styles.productImg}
            source={airpod}
            />
            <View style={{}}>
            <Text style={styles.productName}>FreeBuds Huawei</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.offerPrice}>$ 899</Text>
            <Text style={styles.productPrice}>$ 1,499</Text>
            </View>
          </View>
          <View>
            <Text>-10%</Text>
          </View>
          </View>
          
          </View>
      </View>
      </View>
    </View>
    </ScrollView>
    </View>
      </MenubarScreen>
  )
}

const styles = StyleSheet.create({
  firstSection:{
      width: 393,
      height: 200,
      backgroundColor: '#5956E9',
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50
  },
  firstContent:{
      flexDirection: 'row',
      marginHorizontal: 30,
  },
  profile:{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white'
  },
  mail:{
      fontSize: 18,
      fontWeight: '500',
      color: 'white',
      lineHeight: 20
  },
  titleBox:{
    marginBottom: 10,
    marginTop: 40,
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title:{
      fontSize: 25,
      fontWeight: 'bold',
  },
  titleView:{
      fontSize: 18,
      fontWeight: '700',
      color: '#5d5e5e',
      marginRight: 54
  },
  productBox:{
      width: 330,
      height: 90,
      backgroundColor: 'white',
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: 13
  },
  productImg:{
      width: 60,
      height: 65
  },
  productName:{
      fontSize: 17,
      fontWeight: '800',
      color: '#626363'
  },
  offerPrice:{
      fontSize: 20,
      fontWeight: 'bold',
  },
  productPrice:{
      fontSize: 20,
      color: '#7e8082'
  },


  lastSection:{
    width: 390,
    height: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: 'absolute',
    marginTop: 666,
    
 },
 last:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30
 },
 homeIcon:{
    flexDirection: 'row',
 },
})