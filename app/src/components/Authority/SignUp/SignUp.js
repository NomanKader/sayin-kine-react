import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text,Image, View } from 'react-native';
const SignUp=()=>{
    return(
        <View style={signup_styles.container}>
        <StatusBar style="light" backgroundColor="#467ca4" />
        <Image style={signup_styles.gradient} source={require('../../../assets/images/upperGradient.png')}/>
        <Image style={signup_styles.logo} source={require('../../../assets/images/logo.png')}/>
      </View>    
    )
}
export default SignUp
const signup_styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    gradient:{
      top:25,
      left:-5,
      width:400,
      height:220
    },
    logo:{
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:120,
      height:150
    },
  });
