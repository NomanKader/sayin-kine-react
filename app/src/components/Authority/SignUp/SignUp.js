import { StatusBar } from "expo-status-bar";
import React from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
  View,
} from "react-native";
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { TextInput, Button } from "react-native-paper";
const SignUp = () => {
  const [phonenumber, setPhoneNumber] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");
  const [signup_icon,setIcon]=React.useState("");
  // error variables
  const [phoneNumberErr, setPhoneNumberErr] = React.useState(false);
  const [NameErr, setNameErr] = React.useState(false);
  const [PasswordErr, setPasswordErr] = React.useState(false);
  const [ConfirmPasswordErr, setConfirmPasswordErr] = React.useState(false);

  const Submit = (e) =>{
    e.preventDefault();
    if(phonenumber == "" ){
      setPhoneNumberErr({
        phoneNumberErr:true
      })
    }
    else if(phonenumber!=""){
      setIcon({
        signup_icon:"camera"
      })
      //alert('no error')
      
    }
    if(name == "" ){
        setNameErr({
          NameErr:true
        })
      }
    if(password == "" || password.length<8 ){
          setPasswordErr({
            PasswrodErr:true
          })
        }
    if(confirmpassword == "" || confirmpassword<8 ){
            setConfirmPasswordErr({
              ConfirmPasswordErr:true
            })
          }
    if(password!=confirmpassword){
      setPasswordErr({
        PasswordErr:true
      })
      setConfirmPasswordErr({
        ConfirmPasswordErr:true
      })
    }
    if(phoneNumberErr==false){
      //alert("Hello")
    }        
    // const formData = {
    //   Phone_Number : phonenumber,
    //   User_Name: name,
    //   User_Password: password
    // }
  }
  return (
    <View style={signup_styles.container}>
      <StatusBar style="light" backgroundColor="#467ca4" />
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 10}
        behavior="position"
      >
        <Image
          style={signup_styles.gradient}
          source={require("../../../assets/images/upperGradient.png")}
        />
        <Image
          style={signup_styles.logo}
          source={require("../../../assets/images/logo.png")}
        />
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        {/* <View style={signup_styles.inner}> */}

        {/*  First input */}
        <TextInput
          style={signup_styles.input}
          theme={{ colors: { primary: "#467ca4" } }}
          label="Enter Account Phone Number"
          value={phonenumber}
          onChangeText={(phonenumber) => setPhoneNumber(phonenumber)}
          keyboardType="phone-pad"
          error = {phoneNumberErr}
        />
        {/*  Second input */}
        <TextInput
          style={signup_styles.input}
          theme={{ colors: { primary: "#467ca4" } }}
          label="Enter Your Name"
          value={name}
          onChangeText={(name) => setName(name)}
          keyboardType="default"
          error = {NameErr}
        />
        {/* Password */}
        <TextInput
          style={signup_styles.input}
          theme={{ colors: { primary: "#467ca4" } }}
          label="Enter Password"
          showSoftInputOnFocus={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
          keyboardType="default"
          error = {PasswordErr}
        />
        {/* Confirm Password */}
        <TextInput
          style={signup_styles.input}
          theme={{ colors: { primary: "#467ca4" } }}
          label="Enter Confirm Password"
          value={confirmpassword}
          secureTextEntry={true}
          focusable={true}
          showSoftInputOnFocus={true}
          onChangeText={(confirmpassword) =>setConfirmPassword(confirmpassword)}
          keyboardType="default"
          error = {ConfirmPasswordErr}
        />
        <Button
          labelStyle={{ fontSize: 17 }}
          style={signup_styles.signup_btn}
          mode="contained"
          onPress={Submit}
          icon={signup_icon}
        >
          Sign Up
        </Button>
      </KeyboardAvoidingView>
      {/* <Text style={signup_styles.login}>If you already have an account, <Text style={signup_styles.loginText}>please login</Text></Text> */}
      <Text style={signup_styles.login}>If you already have an account, please<Text style={signup_styles.loginText}> Login</Text></Text>
    </View>
  );
};
export default SignUp;
const signup_styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  gradient: {
    top: 0,
    left: 0,
    width: "100%",
    height: 220,
  },
  logo: {
    top: -60,
    display: "flex",
    alignSelf: "center",
    width: 120,
    height: 150,
  },
  input: {
    top: -50,
    marginBottom: 10,
    backgroundColor: "#fff",
    color: "#467ca4",
    width: 320,
    alignSelf: "center"
  },
  signup_btn: {
    backgroundColor: "#467ca4",
    borderRadius: 10,
    width: 250,
    top: -30,
    alignSelf: "center",
  },
  login: {
    top: -15,
    alignSelf: 'center',
  },
  loginText: {
    color: '#467ca4',
    fontWeight: 'bold',
    fontSize: 16
  }
});