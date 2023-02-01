import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Searchbar({ term, onTermChange, onTermSubmit, navigation }) {
  return (
    <View>
      <View style={styles.firstFlex}>
<View style={styles.inputBox}>
<Feather style={styles.search} name="search" size={24} color="#CFCFCF" />
<TextInput style={styles.input}
  placeholder="Search Products"
  placeholderTextColor={'#CFCFCF'}
  autoCapitalize= 'none'
  autoCorrect={false}
  value={term}
  onChangeText={onTermChange}
  onEndEditing={onTermSubmit}
  />
</View>
  <TouchableOpacity 
  style={styles.bell}
  onPress={()=> navigation.navigate('Notification')}
  >
      <View style={styles.bulletPoint}></View>
  <SimpleLineIcons style={styles.bellIcon} name="bell" size={20} color="#CFCFCF" />
  </TouchableOpacity>
</View>
    </View>
  )
}

const styles = StyleSheet.create({
    firstFlex:{
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 15,
        
    },
    inputBox:{
        backgroundColor: 'white',
        borderRadius: 30,
        width: 300,
        height: 50,
        flexDirection: 'row',
        elevation: 1
    },
    search:{
        marginTop: 14,
        marginRight: 15,
        marginLeft: 12
    },
    bell:{
        marginLeft: 10,
        width: 50,
        height: 50,
        backgroundColor: 'white' ,
        borderRadius: 100,
    },
    bellIcon:{
        marginTop: 5,
        marginLeft: 15,
    },
    bulletPoint:{
        width: 10,
        height: 10,
        backgroundColor: '#FF5500',
        borderRadius: 100,
        marginLeft: 35
    },
})