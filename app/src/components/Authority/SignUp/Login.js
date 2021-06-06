import React from "react";
import {
  StyleSheet,
  Image,
  Platform,
  KeyboardAvoidingView,
  View,
  Text
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextInput, Button } from "react-native-paper";
import axios from "axios";

const root_url = "https://sayinkineapi.nksoftwarehouse.com/";

const Login = ({history}) => {
  const [phonenumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {  
      Phone_Number: phonenumber,
      User_Password: password,
    };
    axios
      .post(`${root_url}api/Login?token=`, formData)
      .then((res) => {
        if(res.data!="401"){
          alert(res.data)
          AsyncStorage.setItem("@token",res.data);
          history.push("/home");
        }
        if(res.data=="401"){
          alert("Phone Number Or Password Incorrect");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
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
        <Text style={login_styles.signup}>
        If you do not have an account, please
        <Text
          style={login_styles.signupText}
          onPress={() => history.push("/signup")}
        >
          {" "}
          SignUp
        </Text>
      </Text>
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
  signup: {
    top: -15,
    alignSelf: "center",
  },
  signupText: {
    color: "#467ca4",
    fontWeight: "bold",
    fontSize: 16,
  },
});
