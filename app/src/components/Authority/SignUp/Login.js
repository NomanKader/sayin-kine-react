import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Image,
  Platform,
  KeyboardAvoidingView,
  View,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextInput, Button } from "react-native-paper";
import axios from "axios";

const root_url = "https://sayinkineapi.nksoftwarehouse.com/";
const [param_url,setParamUrl]=React.useState("");
const local = AsyncStorage.getItem("token")
const Login = () => {
  const [phonenumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  //const [token, setToken] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      Phone_Number: phonenumber,
      User_Password: password,
    };
    if(AsyncStorage.getItem('token')==""){
      setParamUrl({
        param_url:`${root_url}api/Login?phone_number=${formData.Phone_Number}&user_password=${formData.User_Password}&token`
      })
    }
    else{
      setParamUrl({
        param_url:`${root_url}api/Login?phone_number=${formData.Phone_Number}&user_password=${formData.User_Password}&token=${AsyncStorage.getItem('token')}`,
      })
    }
    axios
      .post(
        param_url
        //`${root_url}api/Login?phone_number=${formData.Phone_Number}&user_password=${formData.User_Password}&token`,
        //alert(token+'')
        )
      .then((res) => {
        if (res.data == "202") {
          AsyncStorage
          .setItem("token", res.data);
          
        }
        alert(res.data)
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <StatusBar style="light" backgroundColor="#467ca4" />
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 10}
        behavior="position"
      >
        <Image
          style={login_styles.gradient}
          source={require("../../../assets/images/login_gradient.png")}
        />
        <Image
          style={login_styles.logo}
          source={require("../../../assets/images/logo.png")}
        />
        {/*  Phone number input */}
        <TextInput
          style={login_styles.input}
          theme={{ colors: { primary: "#467ca4" } }}
          label="Enter Account Phone Number"
          name="phonenumber"
          value={phonenumber}
          onChangeText={(phonenumber) => setPhoneNumber(phonenumber)}
          keyboardType="phone-pad"
        />

        <TextInput
          style={login_styles.input}
          theme={{ colors: { primary: "#467ca4" } }}
          label="Enter Password"
          showSoftInputOnFocus={true}
          name="password"
          value={password}
          onChangeText={(password) => {
            setPassword(password);
          }}
          secureTextEntry={true}
          keyboardType="default"
        />

        <Button
          labelStyle={{ fontSize: 17 }}
          style={login_styles.login_btn}
          mode="contained"
          onPress={handleSubmit}
        >
          Login
        </Button>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const login_styles = StyleSheet.create({
  gradient: {
    top: 10,
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
    alignSelf: "center",
  },
  login_btn: {
    backgroundColor: "#467ca4",
    borderRadius: 10,
    width: 250,
    top: -30,
    alignSelf: "center",
  },
});
