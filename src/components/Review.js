import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import amber from '../../assets/picture/amber.jpg'
import tom from '../../assets/picture/tom.jpg'
import kate from '../../assets/picture/Kate.jpg'
import been from '../../assets/picture/been.jpg'
import dua from '../../assets/picture/dua.jpg'
import { FontAwesome } from '@expo/vector-icons';
import useReview from '../hooks/useReview'

export default function Review() {

  const {data,loading,error} = useReview();

  return (
    <View>
        <Text style={styles.heading}>Reviews</Text>
     <ScrollView>
     <View style={styles.review}>

      {
        loading == false && data.map(review => 
      <View style={styles.main}>
      <View style={styles.box}>
      <View style={styles.border}></View>
      <View>
      <View style={styles.infoBox}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 20}}>
        <Image style={styles.image} source={{uri: review.reviewer_avatar_urls['24']}}/>
        <View>
        <Text style={styles.name}>{review.reviewer.length > 13 ? review.reviewer.slice(0, 13) : review.reviewer }</Text>
        <Text style={styles.mail}>{review.reviewer_email.length > 20 ? review.reviewer_email.slice(0, 20) : review.reviewer_email }</Text>
        </View>
        </View>
        <View style={{flexDirection: 'row',}}>
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <Text>{review.rating}</Text>
        </View>
      </View>
      
      </View>
      <View style={{}}>
        
      </View>
      </View>
      <View style={styles.messageBox}>
      <Text style={styles.msg}>{review.review}</Text>
      </View>
      </View>
          )
      }
      
    </View>
     </ScrollView>
    </View>
   
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 15,
        marginHorizontal: 20
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 50
    },
    name:{
        fontSize: 16,
        fontWeight: '700',
        paddingLeft: 10
    },
    mail:{
        fontSize: 15,
        fontWeight: '500',
        paddingLeft: 10
    },
    infoBox:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    
    review:{
        marginHorizontal: 20,
        paddingBottom: 80
    },
    icon:{
        paddingHorizontal: 2
    },
    border:{
        borderLeftWidth: 3,
        borderColor: '#7286D3',
        borderRadius: 20
    },
    box:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    main:{
      backgroundColor: '#dfe2e8',
      marginVertical: 15,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      
    },
    messageBox:{
      marginBottom: 10,
      marginHorizontal: 20
    },
    msg:{
      textAlign: 'center',
    }
})

