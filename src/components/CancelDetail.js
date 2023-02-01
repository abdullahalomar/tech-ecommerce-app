import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import image from '../../assets/airPodp.jpg'

export default function CancelDetail() {
  return (
    <View>
        <View style={styles.header}>
        <Octicons name="chevron-left" size={24} color="black" />
        <Text style={styles.heading}>CancelDetail</Text>
        </View>
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

        <View style={styles.track}>
            <Text style={styles.trackTitle}>Tracking Progress</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
            <Octicons name="dot-fill" size={24} color="#f2a23a" />

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
        </View>

        <View style={styles.track}>            
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
        </View>

        <View>
            <Text>Cancelled Item</Text>
            <View>
                <Image style={styles.img} source={image}/>
            </View>
        </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 13
    },
    heading:{
        fontSize: 17,
        fontWeight: '500',
        paddingLeft: 5
    },
    notify:{
        backgroundColor: '#A084DC',
        paddingVertical: 10,
        paddingHorizontal: 30
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
        marginVertical: 12
    },
    reasonTitle:{
        fontSize: 16,
        fontWeight: '700',

    },
    track:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 15,
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
        color: '#f2a23a',
        fontSize: 15,
        fontWeight: '600'

    },
    img:{
        width: 70,
        height: 70,
    }
})