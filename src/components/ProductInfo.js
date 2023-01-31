import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';

export default function ProductInfo({ navigation }) {

    
    const {product} = navigation.state.params;

    const [counter, setCounter] = useState(1);

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
    <View>
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
            <Text style={styles.sony}>{product.title}</Text>
            <Text style={styles.long}>{product.description}</Text>
        </View>
        

        <View style={styles.seven}>
            <Text style={styles.sevenNumber}>$ {product.price}</Text>
           
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
    </View>
  )
}

const styles = StyleSheet.create({
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