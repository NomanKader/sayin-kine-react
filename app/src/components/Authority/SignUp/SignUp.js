import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Image, View, KeyboardAvoidingView, ScrollView } from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { TextInput, Button } from 'react-native-paper';
const SignUp = () => {
  const [phonenumber, setPhoneNumber] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');
  return (
    <View style={signup_styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        {/* <View style={signup_styles.inner}> */}
        <StatusBar style="light" backgroundColor="#467ca4" />
        <Image style={signup_styles.gradient} source={require('../../../assets/images/upperGradient.png')} />
        <Image style={signup_styles.logo} source={require('../../../assets/images/logo.png')} />
        {/*  First input */}
        <TextInput
          style={signup_styles.input}
          theme={{ colors: { primary: '#467ca4' } }}
          label="Enter Account Phone Number"
          value={phonenumber}
          onChangeText={phonenumber => setPhoneNumber(phonenumber)}

        />
        {/*  Second input */}
        <TextInput
          style={signup_styles.input}
          theme={{ colors: { primary: '#467ca4' } }}
          label="Enter Your Name"
          value={name}
          onChangeText={name => setName(name)}
        />
        {/* Password */}
        <TextInput
          style={signup_styles.input}
          theme={{ colors: { primary: '#467ca4' } }}
          label="Enter Password"
          showSoftInputOnFocus={true}
          value={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
        />
        {/* Confirm Password */}
        <TextInput
          style={signup_styles.input}
          theme={{ colors: { primary: '#467ca4' } }}
          label="Enter Confirm Password"
          value={confirmpassword}
          secureTextEntry={true}
          focusable={true}
          showSoftInputOnFocus={true}
          onChangeText={confirmpassword => setConfirmPassword(confirmpassword)}
        />
      </ScrollView >
      <Button labelStyle={{ fontSize: 17 }} style={signup_styles.signup_btn} mode="contained" onPress={() => console.log('Pressed')}>
        Sign Up
  </Button>
    </View>
  )
}
export default SignUp
const signup_styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    top: 25,
    left: -5,
    width: 400,
    height: 220
  },
  logo: {
    top: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 150
  },
  input: {
    //alignItems:'center',
    //justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    color: '#467ca4',
    width: 320
  },
  signup_btn: {
    backgroundColor: '#467ca4',
    borderRadius: 10,
    width: 250,
    top: 20
  },
});
