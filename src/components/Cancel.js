import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import laptop from '../../assets/laptop.png'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Cancel({navigation}) {
  return (
    <View style={{marginHorizontal: 20, marginTop: 20}}>
        <View style={styles.header}>
      <TouchableOpacity
      onPress={()=>navigation.navigate('Profile')}
      >
      <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>My Cancellations</Text>
      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <View>
            <View style={{marginTop: 10, backgroundColor: 'white', paddingVertical: 10, borderRadius: 10, paddingHorizontal: 10}}>
      <View style={{marginVertical: 5}}>
        <Text style={styles.orderNo}>Order No.69900349034034</Text>
        <Text style={styles.orderNo}>Requested on :31 Jan 2023</Text>
      </View>
      <View style={{marginTop: 10}}>
      <View style={styles.product}>
      <Image source={laptop}/>
      <View>
        <View>
        <Text>Dell Precision 3571 Workstation</Text>
        <Text>Color Family: Black</Text>
        </View>
        <View style={styles.price}>
        <Text style={styles.number}>$ 3,089</Text>
        <TouchableOpacity 
        style={styles.cancelFlex}
        onPress={()=> navigation.navigate('CancelDetail')}
        >
        <Text style={styles.cancelText}>Cancelled</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#F94A29" />
        </TouchableOpacity>
      </View>
      </View>
      </View>
      <Text>Reason: system default reason</Text>
      </View>
      </View>

      <View style={{marginTop: 10, backgroundColor: 'white', paddingVertical: 10, borderRadius: 10, paddingHorizontal: 10}}>
      <View style={{marginVertical: 5}}>
        <Text style={styles.orderNo}>Order No.69900349034034</Text>
        <Text style={styles.orderNo}>Requested on :31 Jan 2023</Text>
      </View>
      <View style={{marginTop: 10}}>
      <View style={styles.product}>
      <Image source={laptop}/>
      <View>
        <View>
        <Text>Dell Precision 3571 Workstation</Text>
        <Text>Color Family: Black</Text>
        </View>
        <View style={styles.price}>
        <Text style={styles.number}>$ 3,089</Text>
        <TouchableOpacity 
        style={styles.cancelFlex}
        onPress={()=> navigation.navigate('CancelDetail')}
        >
        <Text style={styles.cancelText}>Cancelled</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#F94A29" />
        </TouchableOpacity>
      </View>
      </View>
      </View>
      <Text>Reason: system default reason</Text>
      </View>
      </View>


      <View style={{marginTop: 10, backgroundColor: 'white', paddingVertical: 10, borderRadius: 10, paddingHorizontal: 10}}>
      <View style={{marginVertical: 5}}>
        <Text style={styles.orderNo}>Order No.69900349034034</Text>
        <Text style={styles.orderNo}>Requested on :31 Jan 2023</Text>
      </View>
      <View style={{marginTop: 10}}>
      <View style={styles.product}>
      <Image source={laptop}/>
      <View>
        <View>
        <Text>Dell Precision 3571 Workstation</Text>
        <Text>Color Family: Black</Text>
        </View>
        <View style={styles.price}>
        <Text style={styles.number}>$ 3,089</Text>
        <TouchableOpacity 
        style={styles.cancelFlex}
        onPress={()=> navigation.navigate('CancelDetail')}
        >
        <Text style={styles.cancelText}>Cancelled</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#F94A29" />
        </TouchableOpacity>
      </View>
      </View>
      </View>
      <Text>Reason: system default reason</Text>
      </View>
      </View>


      <View style={{marginTop: 10, backgroundColor: 'white', paddingVertical: 10, borderRadius: 10, paddingHorizontal: 10}}>
      <View style={{marginVertical: 5}}>
        <Text style={styles.orderNo}>Order No.69900349034034</Text>
        <Text style={styles.orderNo}>Requested on :31 Jan 2023</Text>
      </View>
      <View style={{marginTop: 10}}>
      <View style={styles.product}>
      <Image source={laptop}/>
      <View>
        <View>
        <Text>Dell Precision 3571 Workstation</Text>
        <Text>Color Family: Black</Text>
        </View>
        <View style={styles.price}>
        <Text style={styles.number}>$ 3,089</Text>
        <TouchableOpacity 
        style={styles.cancelFlex}
        onPress={()=> navigation.navigate('CancelDetail')}
        >
        <Text style={styles.cancelText}>Cancelled</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#F94A29" />
        </TouchableOpacity>
      </View>
      </View>
      </View>
      <Text>Reason: system default reason</Text>
      </View>
      </View>


      <View style={{marginTop: 10, backgroundColor: 'white', paddingVertical: 10, borderRadius: 10, paddingHorizontal: 10}}>
      <View style={{marginVertical: 5}}>
        <Text style={styles.orderNo}>Order No.69900349034034</Text>
        <Text style={styles.orderNo}>Requested on :31 Jan 2023</Text>
      </View>
      <View style={{marginTop: 10}}>
      <View style={styles.product}>
      <Image source={laptop}/>
      <View>
        <View>
        <Text>Dell Precision 3571 Workstation</Text>
        <Text>Color Family: Black</Text>
        </View>
        <View style={styles.price}>
        <Text style={styles.number}>$ 3,089</Text>
        <TouchableOpacity 
        style={styles.cancelFlex}
        onPress={()=> navigation.navigate('CancelDetail')}
        >
        <Text style={styles.cancelText}>Cancelled</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#F94A29" />
        </TouchableOpacity>
      </View>
      </View>
      </View>
      <Text>Reason: system default reason</Text>
      </View>
      </View>
        </View>
      </ScrollView>

      

      
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 10
    },
    header:{
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center'
    },
    orderNo:{
        fontSize: 15,
        color: '#515254'
    },
    product:{
        flexDirection: 'row',
        borderTopWidth: 0.2,
        borderColor: '#9d9d9e',
        paddingVertical: 10
    },
    price:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cancelText:{
        color: '#F94A29'
    },
    cancelFlex:{
        flexDirection: 'row', 
        alignItems: 'center', 
        borderRadius: 10, 
        borderColor: '#ffff',
        paddingHorizontal: 3 
    },
    number:{
        fontSize: 16,
        fontWeight: '500'
    }
})