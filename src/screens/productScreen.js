import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'
import First from '../../assets/first.png'
import Second from '../../assets/second.png'
import Third from '../../assets/third.png'



export default function productScreen({ navigation}) {
    
    const [counter, setCounter] = useState(1);
    const [singleProducts, setSingleProducts] = useState([])

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${navigation.state.params.id}`)
        .then(Response => Response.json())
        .then(data => setSingleProducts(data))
    },[])

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const [circle, setCircle] = useState('')

    const colors = ['#f55b5b','#3355B1','#A833B0']

  return (
    <View style={styles.background}>
      <View style={styles.body}>
      <View style={styles.IconFlex}>
        <TouchableOpacity style={styles.firstIcon}>
        <MaterialIcons 
        style={styles.arrow} 
        name="keyboard-arrow-left" 
        size={24} 
        color="#CFCFCF" 
        onPress={()=> navigation.navigate('Home')}
        />
        </TouchableOpacity>
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
        source={{uri: singleProducts.image}}
        ></Image>
      </LinearGradient>

      <View style={styles.dotLineBox}>
        <View style={styles.dotLineOne}></View>
        <View style={styles.dotLineTwo}></View>
        <View style={styles.dotLineOne}></View>
      </View>

        <View>
        <View style={styles.featured}>
            <View>
                <Image
                    style={styles.headSet}
                source={{uri: singleProducts.image}}
                ></Image>
            </View>
            <View>
            <Image
                style={styles.headSet}
                source={{uri: singleProducts.image}}
                ></Image>
            </View>
            <View>
            <Image
                style={styles.headSet}
                source={{uri: singleProducts.image}}
                ></Image>
            </View>
        </View>
        </View>

        {/* product details */}
        <LinearGradient 
        style={styles.fifthSection}
        colors={[ '#C4ECFC', '#FFFFFF', ]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        >
           <View style={styles.fifth}>
            <Text style={styles.free}>FREE SHIPPING</Text>
            <Text style={styles.twoHun}><AntDesign name="star" size={18} color="#E6BB66" /> <Text style={styles.point}>4.8</Text> (231)</Text>
           </View>

           <View style={styles.six}>
            <Text style={styles.sony}>{singleProducts.title}</Text>
            <Text style={styles.long}>{singleProducts.description}</Text>
        </View>

        <View style={styles.seven}>
            <Text style={styles.sevenNumber}>$ {singleProducts.price}</Text>
           
            <View style={styles.sevenFlex}>
               {
                colors.map((color)=>{
                    return (
                        <TouchableOpacity style={circle == color && styles.firstBox} onPress={()=>{
                            setCircle(color)
                        }}>
                            <View style={{...styles.circle,backgroundColor: color}}></View>
                        </TouchableOpacity>
                    )
                })
               }
               
               
            </View>
        </View>

        <View style={styles.lastSection}>
            <View style={styles.firstF}>
                <TouchableOpacity
                style={styles.decreaseBtn}
                onPress={decrement}
                >
                <FontAwesome style={styles.decrease} name="minus" size={17} color="#f55b5b" />
                </TouchableOpacity>
                <Text style={styles.iCNumber}>{counter}</Text>
                <TouchableOpacity
                style={styles.increaseBtn}
                onPress={increment}
                >
                <FontAwesome style={styles.increase} name="plus" size={17} color="#02e346" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            style={styles.secF}
            onPress={()=> navigation.navigate('Checkout')}
            >
                <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.secFCart}
            onPress={()=> navigation.navigate('Cart')}
            >
                <View style={styles.increaseBtn}><Text style={styles.buttonText}>Add to cart</Text></View>
            </TouchableOpacity>
        </View>

        </LinearGradient>
        {/* product details */}
        
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
        backgroundColor: '#729bd6',
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
        marginHorizontal: 55
    },
    headSet:{
        marginTop: 10,
        marginLeft: 10,
        width: 70,
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#1862db',
    },
    point:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F4343',
    },
    firstBox:{
        width: 28,
        height: 28,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'Black'
    },
    circle:{
        width: 24,
        height: 24,
        borderRadius: 50,
    },
    

    
    // productInformation
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
        marginHorizontal: 25,
    },
    sevenNumber:{
        fontSize: 20,
        fontWeight: '600',
        color: '#ef9534'
    },
    sevenFlex:{
        width:'30%',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    lastSection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginTop: 20
    },
    firstF:{
        width: 94,
        height: 34,
        borderRadius: 36,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingRight: 5
    },
    increase:{
        marginTop:8
    },
    decrease:{
        marginTop:8,
        marginLeft: 6,
    },
    iCNumber:{
        fontSize: 18,
        marginTop: 2.5,
        paddingHorizontal: 5,
        color: '#909090'
    },
    secF:{
        width: 100,
        height: 48,
        backgroundColor: '#6d6bed',
        borderRadius: 55,
    },
    buttonText:{
        fontSize: 17,
        fontWeight: '600',
        color: 'white',
        marginTop: 10,
        textAlign: 'center'
    },
    secFCart:{
        width: 100,
        height: 48,
        backgroundColor: '#70d491',
        borderRadius: 55,
    },
})