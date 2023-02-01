import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import google from '../../assets/icons/google.png'
import facebook from '../../assets/icons/facebook.png'

export default function loginScreen({navigation}) {

    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')

  return (
    <View>
      <LinearGradient
        colors={['#7776cf', '#6967db', '#5553e1']}
        style={styles.firstSection}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View>
        <LinearGradient
        colors={['#EBAEC7', '#7776cf' ]}
        style={styles.halfCircle}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
      </LinearGradient>
      <View style={styles.smallCircle}></View>
        
            <View style={{marginTop: 15}}>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.back}>back</Text>
            </View>
            <View style={styles.bigCircle}></View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View></View>
      <LinearGradient
        colors={['#DDDDDD', '#FFFFFF' ]}
        style={styles.secondSection}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Text style={{marginLeft: 60, marginTop: 20, fontSize: 22, fontWeight: 'bold'}}>Login</Text>
        <View style={{marginHorizontal: 30, marginTop: 30}}>
        <View style={{marginBottom: 30}}>
        <Text style={styles.label}>
        <MaterialCommunityIcons name="email-edit-outline" size={20} color="#8B8B8B" />  Email</Text>
        <TextInput
        style={styles.email}
        // onChangeEmail={onChangeEmail}
        // value={email}
        ></TextInput>
        </View>

        <View>
        <Text style={styles.label}><AntDesign name="unlock" size={20} color="#8B8B8B" />  Password</Text>
        <TextInput
        style={styles.email}
        // value={password}
        // onChangePassword={onChangePassword}
        // keyboardType="numeric"
        ></TextInput>
        </View>
        </View>
        <TouchableOpacity>
            <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.loginButton}
        onPress={()=> navigation.navigate('Home')}
        >
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{}}
        >
            <Text style={styles.create}>Create account</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.loginButton}
        >
            <Text style={styles.loginButtonText}><Image style={styles.googleIcon} source={google}></Image>  Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.loginButton}
        >
            <Text style={styles.loginButtonText}><Image style={styles.googleIcon} source={facebook}></Image> 
             Facebook</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View></View>
      </View>
      
      </LinearGradient>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
     firstSection:{
        width: '100%',
        height: '100%',
     },
     halfCircle:{
        width: 110,
        height: 47,
        marginLeft: 260,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
     },
     smallCircle:{
        width: 30,
        height: 30,
        borderRadius: 100,
        borderWidth: 6,
        borderColor: '#7574e3',
        marginLeft: 80,
        position: 'absolute',
        marginTop: 20
     },
     bigCircle:{
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 7,
        borderColor: '#8584d1',
        marginLeft: 300,
        position: 'absolute',
        marginTop: 195
     },
     welcome:{
        fontSize: 60,
        fontWeight: 'bold',
        marginLeft: 50,
        color: '#FCFCFC',
        
     },
     back:{
        fontSize: 60,
        fontWeight: 'bold',
        marginLeft: 50,
        color: '#FCFCFC',
        lineHeight: 54,
     },
     secondSection:{
        width: 394,
        height: 502,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 90
     },
     email:{
        borderBottomWidth: 0.5,
        marginHorizontal: 30
     },
     label:{
        marginLeft: 30,
        fontSize: 18,
        color: '#8B8B8B'
     },
     forgot:{
        fontSize: 15,
        fontWeight: '800',
        color: '#5552DE',
        marginLeft: 60,
        marginTop: 15
     },
     loginButton:{
        width: 275,
        height: 50,
        backgroundColor: '#706ef5',
        marginHorizontal: 60,
        borderRadius: 15,
        marginTop: 13
     },
     loginButtonText:{
        textAlign: 'center',
        marginTop: 11,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
     },
     create:{
        fontSize: 15,
        fontWeight: '800',
        color: '#5552DE',
        textAlign: 'center',
        marginTop: 15
     },
     googleIcon:{
        width: 25,
        height: 20
     },

     
})