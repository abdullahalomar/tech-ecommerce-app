import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import image from '../../assets/airPodp.jpg'

export default function CancelDetail({navigation}) {
  return (
    <View style={styles.body}>
        <View style={styles.header}>
        <Text style={styles.heading}>CancelDetail</Text>
        </View>
        
        <ScrollView>
            <View>
            <LinearGradient  
        style={styles.notify}
        colors={['#8493dc', '#A084DC' ]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        >
            <Text style={styles.title}>Sorry!</Text>
            <Text style={styles.titleDetail}>For our cancellation</Text>
        </LinearGradient>
        <View style={styles.reason}>
            <View style={{paddingVertical: 10, paddingHorizontal: 15}}>
            <Text style={styles.reasonTitle}>Cancellation Reason</Text>
            <Text style={[styles.reasonTitle, {color: '#e34a2b', fontSize: 15, paddingTop: 20}]}>system default reason</Text>
            </View>
        </View>

        <View style={[styles.track]}>
            <Text style={styles.trackTitle}>Tracking Progress</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
            <Octicons name="dot-fill" size={24} color="#e36040" />

            <View style={styles.trackDetail}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{}}>
        
            <Text style={styles.cancelText}>Cancelled</Text>
            </View>
            <View></View>
            <View></View>
            </View>
            <View style={{flexDirection: 'row'}}>
            <View style={styles.time}>
            <Text>01-31</Text>
            <Text style={{paddingLeft: 7}}>00:11</Text>
            </View>
            <View></View>
            <View></View>
            </View>
            <Text>An item(s) from your order has been cancelled.</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 45}}>
            <Octicons name="dot-fill" size={24} color="#8a8987" />

            <View style={styles.trackDetail}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{}}>
        
            <Text style={[styles.cancelText, {color: '#4d5054'}]}>Cancellation in Progress</Text>
            </View>
            <View></View>
            <View></View>
            </View>
            <View style={{flexDirection: 'row'}}>
            <View style={styles.time}>
            <Text>01-31</Text>
            <Text style={{paddingLeft: 7}}>00:11</Text>
            </View>
            <View></View>
            <View></View>
            </View>
            <Text>Your refund request is being processed.</Text>
            </View>
            </View>
        </View>

        {/* <View style={[styles.track, {borderBottomLeftRadius: 10, borderBottomRightRadius: 10}]}>            
        <View style={{flexDirection: 'row', marginTop: 10}}>
            <Octicons name="dot-fill" size={24} color="#8a8987" />

            <View style={styles.trackDetail}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{}}>
        
            <Text style={[styles.cancelText, {color: '#8a8987'}]}>Cancellation in Progress</Text>
            </View>
            <View></View>
            <View></View>
            </View>
            <View style={{flexDirection: 'row'}}>
            <View style={styles.time}>
            <Text>01-31</Text>
            <Text style={{paddingLeft: 7}}>00:11</Text>
            </View>
            <View></View>
            <View></View>
            </View>
            <Text>Your refund request is being processed.</Text>
            </View>
            </View>
        </View> */}

        <View style={styles.item}>
            <Text style={styles.itemTitle}>Cancelled Item</Text>
            <View style={styles.itemCard}>
                <Image style={styles.img} source={image}/>
                <View style={{marginLeft: 20}}>
                    <Text style={styles.itemText}>Samsung Galaxy Buds2 Pro True </Text>
                    <Text style={styles.itemText}>Wireless Earbuds</Text>
                    <Text style={{fontSize: 14, fontWeight: '400', paddingTop: 5}}>Color Family: Black</Text>
                    <View style={styles.flex}>
                        <Text style={styles.itemPrice}>$ 3,099</Text>
                        <Text>x1</Text>
                </View>
                </View>
            </View>
        </View>

        <View style={styles.info}>
            <Text style={styles.infoText}>Cancellation Information</Text>
            <View style={{marginTop: 10}}>
            <Text style={styles.infoOrder}>Order Number: 867349832</Text>
            <Text style={styles.infoOrder}>Requested on: 31 Jan 2023</Text>
            <Text style={styles.infoOrder}>Sold by: Sohoj it</Text>
            </View>
        </View>

            </View>
        </ScrollView>

       
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    heading:{
        fontSize: 19,
        fontWeight: '600',
    },
    notify:{
        backgroundColor: '#A084DC',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    title:{
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white',
    },
    titleDetail:{
        fontSize: 13,
        fontWeight: '600',
        color: 'white'
    },
    reason:{
        backgroundColor: 'white',
        marginVertical: 15,
        borderRadius: 10
    },
    reasonTitle:{
        fontSize: 16,
        fontWeight: '700',

    },
    track:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10
    },
    trackDetail:{
        paddingHorizontal: 15
    },
    time:{
        flexDirection: 'row',
        paddingVertical: 5,
    },
    trackTitle:{
        fontSize: 16,
        fontWeight: '600',
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        borderColor: '#5b5b5e'
    },
    cancelText:{
        color: '#e36040',
        fontSize: 15,
        fontWeight: '600'

    },
    img:{
        width: 65,
        height: 65,
        borderRadius: 15
    },
    item:{
        marginTop: 15,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10
    },
    itemTitle:{
        fontSize: 17,
        fontWeight: '600',
        borderBottomWidth: 0.5,
        paddingVertical: 10,
        borderColor: '#828385'
    },
    itemCard:{
        flexDirection: 'row',
        marginTop: 16
    },
    itemText:{
        fontSize: 15,
        fontWeight: '500'
    },
    itemPrice: {
        fontSize: 15,
        fontWeight: '600',
        color: '#FC7300'
    },
    flex:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    info:{
        backgroundColor: 'white',
        marginVertical: 15,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10
    },
    infoText:{
        fontSize: 16,
        fontWeight: '700'
    },
    infoOrder:{
        fontSize: 15,
        fontWeight: '500',
        color: '#7d7e80'
    },
    body:{
        marginHorizontal: 20
    }
})