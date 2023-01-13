import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from '../../assets/Onboarding.png'
import { LinearGradient } from 'expo-linear-gradient'
import Cyber from '../../assets/onboard/cyber.png'
import percent from '../../assets/onboard/40%.png'
import dscnt from '../../assets/onboard/DSCNT.png'
import flash from '../../assets/onboard/flash.png'
import laptop from '../../assets/onboard/onboardmac.png'
import headphone from '../../assets/onboard/onboardheadphone.png'
import gamming from '../../assets/onboard/onboardgamming.png'
import sound from '../../assets/onboard/onboardsound.png'
import airpod from '../../assets/onboard/onboardairpod.png'
import remote from '../../assets/onboard/onboardremote.png'
import tech from '../../assets/onboard/technology.png'
import screen from '../../assets/onboard/Screenshot.png'
import scr from '../../assets/onboard/ScreenshotTT.png'
import avater from '../../assets/avater.png'


export default function onboardingScreen({navigation}) {
  return (
    <View style={styles.body}>
      {/* <Image
      style={{width: 393, height: 766}}
      source={Onboarding}
      ></Image> */}

<LinearGradient
        colors={['#ebf0f5', '#5956E9']}
        style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        {/* <Image
        style={{marginTop: 90, marginLeft: 47}}
        source={Cyber}
        ></Image>

        <View style={styles.firstMain}>
        <View>

            <View style={{flexDirection: 'row'}}>
            <View style={styles.first}>
              <Image
              source={percent}
              ></Image>
              <Image
              source={dscnt}
              ></Image>
            </View>
            <Image
            // style={{position: 'absolute', marginLeft: 120, marginBottom: 20}}
            source={flash}
            ></Image>
            </View>
            <View>
            <Image
            // style={{marginTop: 7}}
            source={tech}
            ></Image>
            
            <Text style={styles.free}>FREE SHIPPING</Text>
            </View>
            
            </View>
            
        </View>
        <Image
        style={{marginLeft: 50, paddingBottom: 30}}
        source={screen}
        ></Image> */}

        

        {/* <Image
        style={{marginTop: 60, marginLeft: 35, width: 310, height: 480}}
        source={scr}
        ></Image> */}
        <View style={{marginTop: 80}}>
        <Image 
        style={{position: 'absolute', marginLeft: 190}}
        source={airpod}
        >
        </Image>
        <Image 
        style={{position: 'absolute', marginLeft: 10}}
        source={gamming}
        >
        </Image>
        <Image 
        style={{position: 'absolute', marginLeft: 240}}
        source={headphone}
        >
        </Image>
         <Image
         style={{width: 100, height: 90, marginTop: 120, marginLeft: 100, position: 'absolute'}}
         source={laptop}
         >
         </Image>
        </View>
        <Image
        style={{width: 320, height: 390, marginLeft: 25, marginTop: 80}}
        source={avater}
        >
        </Image>
        <Text style={styles.valid}>*Valid from 27/03 to 01/04 2022. Min stock: 1 unit</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=> navigation.navigate('Home')}
        >
          <Text style={styles.btnText}>LOG IN</Text>
        </TouchableOpacity>
        <View style={styles.mainDot}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.line}></View>
        </View>
        <TouchableOpacity
        onPress={()=> navigation.navigate('Home')}
        >
        <Text style={styles.skip}>SKIP</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  body:{

  },
   container:{
      width: 394,
      height: 766,
      
   },
   first:{
      flexDirection: 'row',
      marginTop: 25,
   },
   firstMain:{
      flexDirection: 'row',
      marginLeft: 47,
      
   },
   free:{
      marginTop: 8,
      color: '#F4BD46',
      fontWeight: '600',
      fontSize: 13,
      letterSpacing: 1
   },
   valid:{
      fontSize: 12,
      fontWeight: '500',
      color: 'white',
      marginTop: 18,
      marginHorizontal: 90
   },
   button:{
      width: 292,
      height: 48,
      backgroundColor: 'white',
      marginLeft: 49,
      marginTop: 27,
      borderRadius: 65
   },
   btnText:{
      marginLeft: 124,
      marginTop: 13,
      marginBottom: 17,
      fontSize: 16,
      fontWeight: '800',
      color: '#FF5500'
   },
   mainDot:{
      flexDirection: 'row',
      marginLeft: 171,
      marginVertical: 27,
   },
   dot:{
      width: 6,
      height: 6,
      backgroundColor: '#CFCFCF',
      borderRadius: 10,
      marginRight: 6
   },
   line:{
      width: 24,
      height: 6,
      backgroundColor: '#FF5500',
      borderRadius: 44
   },
   skip:{
      fontSize: 17,
      fontWeight: '700',
      color: 'white',
      marginLeft: 337,
      
   }
})