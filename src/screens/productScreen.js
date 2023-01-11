import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Headphones from '../../assets/headPhonep.png'
import First from '../../assets/first.png'
import Second from '../../assets/second.png'
import Third from '../../assets/third.png'



export default function productScreen({navigation}) {
  return (
    <View style={styles.background}>
      <View style={styles.body}>
      <View style={styles.IconFlex}>
        <View style={styles.firstIcon}>
        <MaterialIcons style={styles.arrow} name="keyboard-arrow-left" size={24} color="#CFCFCF" />
        </View>
        <View style={styles.secondIcon}>
        <AntDesign style={styles.secondArrow} name="hearto" size={22} color="#CFCFCF" />
        </View>
        
        <View style={styles.shareIcon}>
        <AntDesign style={styles.arrow} name="sharealt" size={24} color="#CFCFCF" />
        </View>
      </View>

      
      <LinearGradient
        colors={['#fcfcfc', '#E5E5E5']}
        style={styles.container}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image
        style={styles.head}
        source={Headphones}
        ></Image>
      </LinearGradient>

      <View style={styles.dotLineBox}>
        <View style={styles.dotLineOne}></View>
        <View style={styles.dotLineTwo}></View>
        <View style={styles.dotLineOne}></View>
      </View>

        <View>
        <View style={styles.featured}>
            <View style={styles.Box}>
                <Image
                    style={styles.headSet}
                source={First}
                ></Image>
            </View>
            <View style={styles.BoxCommon}>
            <Image
                style={styles.headSetTwo}
                source={Second}
                ></Image>
            </View>
            <View style={styles.Box}>
            <Image
                style={styles.headSetThree}
                source={Third}
                ></Image>
            </View>
        </View>
        </View>

        <View style={styles.fifthSection}>
           <View style={styles.fifth}>
            <Text style={styles.free}>FREE SHIPPING</Text>
            <Text style={styles.twoHun}><AntDesign name="star" size={18} color="#E6BB66" /> <Text style={styles.point}>4.8</Text> (231)</Text>
           </View>

           <View style={styles.six}>
            <Text style={styles.sony}>Sony WH-1000XM4</Text>
            <Text style={styles.long}>The intuitive and intelligent WH-1000XM4 headphones bring you new improvements in industry-leading    noise cancelling technology.</Text>
        </View>

        <View style={styles.seven}>
            <Text style={styles.sevenNumber}>$ 4.999</Text>
           
            <View style={styles.sevenFlex}>
                <View style={styles.firstBox}>
                    <View style={styles.uperCircle}></View>
                </View>
                <View style={styles.secBox}></View>
                <View style={styles.thirdBox}></View>
            </View>
        </View>

        <View style={styles.lastSection}>
            <View style={styles.firstF}>
                <Text style={styles.increase}>- 1 +</Text>
            </View>
            <TouchableOpacity 
            style={styles.secF}
            onPress={()=> navigation.navigate('Checkout')}
            >
                <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
        </View>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#E5E5E5'
    },
    
    firstIcon:{
        width: 45,
        height: 45,
        backgroundColor: 'white',
        borderRadius: 30,
        
    },
    secondIcon:{
        width: 45,
        height: 45,
        backgroundColor: 'white',
        borderRadius: 30,
        marginLeft: 218,
        marginRight: 10
    },
    arrow:{
        marginLeft: 10,
        marginTop: 11
    },
    secondArrow:{
        marginLeft: 12,
        marginTop: 13
    },
    shareIcon:{
        width: 45,
        height: 45,
        backgroundColor: 'white',
        borderRadius: 30,
        
    },
    IconFlex:{
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15
    },
    container:{
        width: 200,
        height: 260,
        borderRadius: 10,
        marginLeft: 95,
        marginTop: 30,
        position: 'relative'
    },
    
    head:{
        width: 200,
        height: 280,
        position: 'absolute'
    },
    dotLineOne:{
        width: 8,
        height: 8,
        backgroundColor: '#CFCFCF',
    },
    dotLineTwo:{
        width: 30,
        height: 8,
        backgroundColor: '#FF5500',
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10
    },
    dotLineOne:{
        width: 8,
        height: 8,
        backgroundColor: '#CFCFCF',
        borderRadius: 10
    },
    dotLineBox:{
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 160
    },
    featured:{
        flexDirection: 'row',
        marginVertical: 20,
        marginLeft: 70
    },
    Box:{
        width: 70,
        height: 70,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    BoxCommon:{
        width: 70,
        height: 70,
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 20 
    },
    headSet:{
        marginTop: 10,
        marginLeft: 10
    },
    headSetTwo:{
        marginTop: 8,
        marginLeft: 8
    },
    headSetThree:{
        marginTop: 8,
        marginLeft: 7
    },
    fifthSection:{
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: 'white',
        height: 270
    },
    fifth:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginTop: 20
    },
    point:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F4343',
    },
    twoHun:{
        color: '#909090'
    },
    free:{
        fontSize: 15,
        color: '#909090'
    },
    six:{
        marginHorizontal: 25
    },
    sony:{
        fontSize: 22,
        fontWeight: '600',
        color: '#343A40',
        marginBottom: 10
    },
    long:{
        color: '#909090',
        marginBottom: 20,
    },
    seven:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25
    },
    sevenNumber:{
        fontSize: 20,
        fontWeight: '600',
        color: '#ef9534'
    },
    firstBox:{
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#3F4343'
    },
    uperCircle:{
        width: 24,
        height: 24,
        backgroundColor: '#3F4343',
        borderWidth: 1,
        borderRadius: 50,
        marginLeft: 2,
        marginTop: 2,
    },
    secBox:{
        width: 24,
        height: 24,
        backgroundColor: '#CCC6BA',
        borderRadius: 50,
        marginHorizontal: 8,
        marginTop: 4
    },
    thirdBox:{
        width: 24,
        height: 24,
        backgroundColor: '#CCC6BA',
        borderRadius: 50,
        marginTop: 4
    },
    sevenFlex:{
        flexDirection: 'row',
    },
    firstF:{
        width: 94,
        height: 34,
        borderRadius: 36,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        marginTop: 8
    },
    secF:{
        width: 211,
        height: 48,
        backgroundColor: '#ef9534',
        borderRadius: 55,
    },
    lastSection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginTop: 20
    },
    increase:{
        fontSize: 20,
        fontWeight: '500',
        letterSpacing: 8,
        marginLeft: 6,
        marginTop:2,
        color: '#909090'
    },
    buttonText:{
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        marginLeft: 80,
        marginTop: 10
    },
    
})