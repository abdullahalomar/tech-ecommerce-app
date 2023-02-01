import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';

export default function CancelDetail() {
  return (
    <View>
        <View style={styles.header}>
        <Octicons name="chevron-left" size={24} color="black" />
        <Text style={styles.heading}>CancelDetail</Text>
        </View>
        <View style={styles.notify}>
            <Text style={styles.title}>Sorry!</Text>
            <Text style={styles.titleDetail}>For our cancellation</Text>
        </View>
        <View style={styles.reason}>
            <View style={{paddingVertical: 10, paddingHorizontal: 15}}>
            <Text style={styles.reasonTitle}>Cancellation Reason</Text>
            <Text style={[styles.reasonTitle, {color: '#F2921D', fontSize: 15, paddingTop: 20}]}>system default reason</Text>
            </View>
        </View>

        <View style={styles.track}>
            <Text>Tracking Progress</Text>
            <View style={styles.trackDetail}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Octicons name="dot-fill" size={24} color="black" />
            <Text>Cancelled</Text>
            </View>
            <View></View>
            <View></View>
            </View>
            <Text>01-31</Text>
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
        paddingHorizontal: 15
    },
    trackDetail:{
        paddingHorizontal: 15
    }
})