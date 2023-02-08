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

  const reviews = useReview();

  return (
    <View>
        <Text style={styles.heading}>Reviews</Text>
     <ScrollView>
     <View style={styles.review}>

      <View>
      <View style={styles.box}>
      <View style={styles.border}></View>
      <View>
      <View style={styles.infoBox}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.image} source={tom}/>
        <Text style={styles.name}>Tom Cruise</Text>
        </View>
        <View style={{flexDirection: 'row',}}>
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star-half-empty" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star-half-empty" size={15} color="#F2921D" />
        </View>
      </View>
      <View style={styles.message}>
        <Text>“Hi thank you for doing business with us. Can you take 1 minute to leave a review about your experience with us? Just go here. Thanks for your help!”</Text>
      </View>
      </View>
      </View>

      {/* <View style={styles.box}>
      <View style={styles.border}></View>
      <View>
      <View style={styles.infoBox}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.image} source={amber}/>
        <Text style={styles.name}>Amber Heard</Text>
        </View>
        <View style={{flexDirection: 'row',}}>
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        </View>
      </View>
      <View style={styles.message}>
        <Text>“Hi thank you for doing business with us. Can you take 1 minute to leave a review about your experience with us? Just go here. Thanks for your help!”</Text>
      </View>
      </View>
      </View>

      <View style={styles.box}>
      <View style={styles.border}></View>
      <View>
      <View style={styles.infoBox}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.image} source={kate}/>
        <Text style={styles.name}>Kate Winslet</Text>
        </View>
        <View style={{flexDirection: 'row',}}>
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star-half-empty" size={15} color="#F2921D" />
        </View>
      </View>
      <View style={styles.message}>
        <Text>“Hi thank you for doing business with us. Can you take 1 minute to leave a review about your experience with us? Just go here. Thanks for your help!”</Text>
      </View>
      </View>
      </View>

      <View style={styles.box}>
      <View style={styles.border}></View>
      <View>
      <View style={styles.infoBox}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.image} source={dua}/>
        <Text style={styles.name}>Dua Lipa</Text>
        </View>
        <View style={{flexDirection: 'row',}}>
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star-half-empty" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star-half-empty" size={15} color="#F2921D" />
        </View>
      </View>
      <View style={styles.message}>
        <Text>“Hi thank you for doing business with us. Can you take 1 minute to leave a review about your experience with us? Just go here. Thanks for your help!”</Text>
      </View>
      </View>
      </View>

      <View style={styles.box}>
      <View style={styles.border}></View>
      <View>
      <View style={styles.infoBox}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.image} source={been}/>
        <Text style={styles.name}>Rowan Atkinson</Text>
        </View>
        <View style={{flexDirection: 'row',}}>
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star-half-empty" size={15} color="#F2921D" />
        <FontAwesome style={styles.icon} name="star-half-empty" size={15} color="#F2921D" />
        </View>
      </View>
      <View style={styles.message}>
        <Text>“Hi thank you for doing business with us. Can you take 1 minute to leave a review about your experience with us? Just go here. Thanks for your help!”</Text>
      </View>
      </View>
      </View> */}
      </View>
      
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
    infoBox:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    message:{
        color: '#4e5052',
        paddingHorizontal: 20
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
        borderColor: '#645CBB',
        borderRadius: 20
    },
    box:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        backgroundColor: '#dfe2e8',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        paddingVertical: 8
    }
})

