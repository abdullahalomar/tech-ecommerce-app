import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { TouchableHighlight, ToastAndroid } from 'react-native'
import { Avatar } from 'react-native-paper'
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'
import { TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ImageUpload() {

    const [ pic, setPic ] = useState('');

    const setToastMsg = msg => {
        ToastAndroid.showWidthGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
    };

    const uploadImage = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true,
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                setToastMsg('Cancelled image Selected');
            } else if (response.errorCode === 'permission') {
                setToastMsg('permission not satisfied');
            }else if (response.errorCode === 'others') {
                setToastMsg(response.errorMessage);
            } else if (response.assets[0].fileSize > 2097152) {
                Alert.alert('Maximum image size exceeded', 'Please chose image under 2 MB', [{text: 'OK'}],);
            } else {
                setPic(response.assets[0].base64)
            }
        });
    };

  return (
    <View>
      <View style={{marginHorizontal: 93, marginBottom: 9}}>
        <TouchableHighlight
        onPress={()=> alert('Success')}
        underlayColor="125, 164, 227"
        >
         <Avatar.Image
         size={110}
         source={{uri: 'data:image/png;base64,' + pic}}
         />   
            
        </TouchableHighlight>
        <TouchableOpacity
        style={styles.editIcon}
        mode="contained"
        onPress={()=> alert('Success')}
        >
        <MaterialCommunityIcons 
        name="account-edit" 
        size={30} 
        color="white" 
        
        />
        </TouchableOpacity>
      </View>

      <View>
        <TextInput
        style={styles.email}
        placeholder='Name'
        />
        <TextInput
        style={styles.email}
        placeholder='Email'
        />
        <TextInput
        placeholder='Phone'
        style={styles.email}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        backgroundColor: '#7da4e3',
        borderRadius: 20
    },
    buttonText:{
        fontSize: 15,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        marginVertical: 3
    },
    UploadButtons:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    email: {
        borderBottomWidth: 0.7,
        borderBottomColor: 'gray',
        marginHorizontal: 60,
        marginTop: 10 
    },
    editIcon:{
        position: 'absolute',
        marginTop: 80,
        marginLeft: 70,
        backgroundColor: '#7ba3e3',
        borderRadius: 30,
        padding: 4
    }
})