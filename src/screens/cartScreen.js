import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Cart from '../components/Cart';
import Promo from '../components/Promo';
import { CartProvider } from '../Provider/Cart/CartProvider';

export default function cartScreen({navigation}) {

  return (
    <CartProvider>
    <View style={styles.background}>
     <ScrollView>
        <View style={styles.body}>
      {/* cart   */}
            <Cart/>
      {/* cart */}
    
        </View>
        </ScrollView>
        
        <View style={{marginTop: 475, position: 'absolute', marginHorizontal: 22,}}>
        <Promo/>
      <LinearGradient 
      style={{
      paddingVertical: 15,
      paddingHorizontal: 20, 
      borderRadius: 20,
      elevation: 10,
      }}
      colors={[ '#ffffff', '#9CBCE4',  ]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      >
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color:'#414345'}}>Total items(3)</Text>
        <Text style={{fontSize: 17, color:'#414345'}}>$ 4000</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color:'#414345'}}>Delivery</Text>
        <Text style={{fontSize: 17, color:'#414345'}}>$ 8000</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 8}}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color:'#414345'}}>Total</Text>
        <Text style={{fontSize: 17, }}>$ 12000</Text>
      </View>
      <TouchableOpacity 
      style={styles.button}
      onPress={()=> navigation.navigate('Checkout')}
      >
            <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
      </LinearGradient>
      </View>
        
    </View>
    </CartProvider>
  )
}

const styles = StyleSheet.create({
    background:{
        width: '100%',
        height: 490,
        backgroundColor: '#F5F5F8'
    },
    body:{
        marginTop: 25,
    },
    main:{
        width:280,
        height: 45,
        backgroundColor: '#baebff',
        borderRadius: 10,
        marginLeft: 55,
        marginTop: 20
    },
    first:{
        marginLeft: 12,
        flexDirection: 'row',
        marginTop: 8
    },
    firstText:{
        fontSize: 14,
        fontWeight: '700',
        marginTop: 3,
        color: '#3d3d3d',
        marginLeft: 5
    },
    quantity:{
        fontSize: 15,
        fontWeight: '500',
        marginRight: 13
    },
    button:{
        width: 307,
        height: 60,
        backgroundColor: '#6d6bed',
        borderRadius: 10,
        marginTop: 30
    },
    buttonText:{
        textAlign: 'center',
        marginTop: 14,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
})