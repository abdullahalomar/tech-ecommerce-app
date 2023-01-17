import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import man from '../../assets/menavater.png'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import airpod from '../../assets/airpod.png'
import laptop from '../../assets/laptop.png'
import airpodTwo from '../../assets/onboardairpod.png'
import head from '../../assets/second.png'
import sound from '../../assets/soundBox.png'

import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function profileScreen({navigation}) {
  return (
    <View style={{width: 408, height: 762}}>
      <View style={styles.firstSection}>
        <View style={styles.firstContent}>
          {/* <View style={{flexDirection: 'row', marginRight: 40}}> */}
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
          {/* </View> */}
          <TouchableOpacity style={{marginTop: 40}}>
          <Feather name="settings" size={28} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.notification}>
        <TouchableOpacity 
        style={styles.iconBox}
        >
        <AntDesign name="hearto" size={24} color="#757678" />
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.iconBox}
        >
        <Feather name="bell" size={24} color="#757678" />
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.iconBox}
        >
  
        <Feather name="message-circle" size={24} color="#757678" />
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.iconBox}
        >
        <Feather name="star" size={24} color="#757678" />
        </TouchableOpacity>
        </View>
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

    {/* menubar */}

    <LinearGradient
       style={styles.lastSection}
       colors={['#9CBCE4','#ffffff',  ]}
       start={{ x: 1, y: 0 }}
       end={{ x: 1, y: 1 }}
       >
            <View style={styles.last}>
            <TouchableOpacity style={{marginTop: 7,}}>
            <Entypo name="shop" size={24} color="#8B8B8B" />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> navigation.navigate('Product')}
            >
            <MaterialCommunityIcons style={{marginTop: 5}} name="shopping-outline" size={28} color="#8B8B8B" />
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.homeIcon}
            onPress={()=> navigation.navigate('Home')}
            >
            <Text style={styles.home}><Octicons style={{}} name="home" size={35} color="#5351db" /></Text>
            </TouchableOpacity>
            
            
            <TouchableOpacity
            onPress={()=> navigation.navigate('Wishlist')}
            >
            <Entypo style={{marginTop: 6}} name="heart-outlined" size={28} color="#8B8B8B" />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> navigation.navigate('Profile')}
            >
            <MaterialCommunityIcons style={{marginTop: 3}} name="account-outline" size={30} color="#8B8B8B" />
            </TouchableOpacity>
            </View>
        </LinearGradient>

    {/* menubar */}

    </View>
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
  notification:{
      flexDirection: 'row',
      position: 'absolute',
      marginLeft: 30,
      marginTop: 165
  },
  iconBox:{
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: 'white',
      borderRadius: 15,
      marginRight: 26.5,
      elevation: 4
  },
  getSection:{
      
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