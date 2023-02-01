import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import headphone from '../../assets/notificationp.png'
import airPod from '../../assets/airPodp.jpg'
import watch from '../../assets/watchp.jpg'

export default function Notification({navigation}) {

    

  return (
    <View style={styles.notify}>
         <Text style={styles.header}>Notifications</Text>
        <ScrollView
        showsVerticalScrollIndicator={false} 
        >
        <View>
            <View style={styles.box}>
                <Image style={styles.image} source={headphone}/>
            <View style={{flexDirection: 'row'}}>
            <View>
            <Text style={styles.text}><Text style={styles.offer}>50% OFF</Text> in Ultraboost All </Text>
            <Text style={styles.text}>Terrain LTD Gadgets!!</Text>
            </View>
            <Text style={styles.time}>9:35 AM</Text>
        </View>
      </View>
    </View>
        <View>
            <View style={styles.box}>
                <Image style={styles.image} source={airPod}/>
            <View style={{flexDirection: 'row'}}>
            <View>
            <Text style={styles.text}><Text style={styles.offer}>50% OFF</Text> in Ultraboost All </Text>
            <Text style={styles.text}>Terrain LTD Gadgets!!</Text>
            </View>
            <Text style={styles.time}>9:35 AM</Text>
        </View>
      </View>
    </View>
        <View>
            <View style={styles.box}>
                <Image style={styles.image} source={watch}/>
            <View style={{flexDirection: 'row'}}>
            <View>
            <Text style={styles.text}><Text style={styles.offer}>50% OFF</Text> in Ultraboost All </Text>
            <Text style={styles.text}>Terrain LTD Gadgets!!</Text>
            </View>
            <Text style={styles.time}>9:35 AM</Text>
        </View>
      </View>
    </View>
        
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width: 60,
        height: 60,
        borderRadius: 50
    },
    box:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#d5d9e0',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        alignItems: 'center'
    },
    text:{
        fontSize: 17,
    },
    offer:{
        color: '#645CBB',
        fontWeight: '500'
    },
    notify:{
        marginHorizontal: 20,
    },
    time:{
        paddingHorizontal: 8
    },
    header:{
        fontSize: 17,
        fontWeight: '500',
        marginVertical: 15
    }
  });