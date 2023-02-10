import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import laptop from '../../assets/onboard/onboardmac.png'
import headphone from '../../assets/onboard/onboardheadphone.png'
import gamming from '../../assets/onboard/onboardgamming.png'
import sound from '../../assets/onboard/onboardsound.png'
import airpod from '../../assets/onboard/onboardairpod.png'
import remote from '../../assets/onboard/onboardremote.png'
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
        
        <View style={{marginTop: 60, marginLeft: 10}}>
         <Image
         style={{width: 190, height: 110, marginTop: 10, marginLeft: 30, position: 'absolute'}}
         source={laptop}
         
         >
         </Image>
         <Image 
        style={{position: 'absolute', marginLeft: 120, marginTop: 49, width: 150, height: 120}}
        source={gamming}
        >
        </Image>
        <Image 
        style={{position: 'absolute', marginLeft: 235, width: 110, height: 100,}}
        source={headphone}
        >
        </Image>
        <Image
         style={{width: 130, height: 50, marginTop: 150, marginLeft: 35, position: 'absolute'}}
         source={sound}
         >
         </Image>
         <Image 
        style={{position: 'absolute', marginLeft: 105, marginTop: 180, width: 70, height: 46}}
        source={airpod}
        >
        </Image>
        <Image
         style={{width: 90, height: 60, marginTop: 168, marginLeft: 180, position: 'absolute'}}
         source={remote}
         >
         </Image>
        </View>
        
        <View style={{marginTop: 120}}>
        <Image
        style={{width: 320, height: 390, marginLeft: 25}}
        source={avater}
        >
        </Image>

        <Text style={styles.valid}>*Valid from 27/03 to 01/04 2022. Min stock: 1 unit</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=> navigation.navigate('Login')}
        >
          <Text style={styles.btnText}>Get started</Text>
        </TouchableOpacity>
        {/* <View style={styles.mainDot}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.line}></View>
        </View> */}
        {/* <TouchableOpacity
        onPress={()=> navigation.navigate('Login')}
        >
        <Text style={styles.skip}>SKIP</Text>
        </TouchableOpacity> */}
        </View>
      </LinearGradient>
    </View>
    
  )
}

const styles = StyleSheet.create({
  body:{

  },
   container:{
      width: 394,
      height: '100%',
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
      fontSize: 10,
      fontWeight: '300',
      color: 'white',
      marginTop: 18,
      marginHorizontal: 80
   },
   button:{
      width: 292,
      height: 54,
      backgroundColor: 'white',
      marginLeft: 49,
      marginTop: 27,
      borderRadius: 65
   },
   btnText:{
      textAlign: 'center',
      marginTop: 15,
      marginBottom: 17,
      fontSize: 20,
      fontWeight: '900',
      color: '#5351db'
   },
   mainDot:{
      flexDirection: 'row',
      marginLeft: 171,
      marginTop: 25,
      marginBottom: 10
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
      marginTop: 30
   }
})

