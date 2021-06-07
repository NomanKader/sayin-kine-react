import axios from "axios";
import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { TextInput, Button } from "react-native-paper";

const root_url = "https://sayinkineapi.nksoftwarehouse.com/";

const SignUp = ({ history }) => {
  // data variables
  const [phonenumber, setPhoneNumber] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");

  // loader controller
  const [isSibmitted, setIsSubmitted] = React.useState(false);

  // error variables
  const [phoneNumberErr, setPhoneNumberErr] = React.useState(false);
  const [NameErr, setNameErr] = React.useState(false);
  const [PasswordErr, setPasswordErr] = React.useState(false);
  const [ConfirmPasswordErr, setConfirmPasswordErr] = React.useState(false);

  const Submit = (e) => {
    e.preventDefault();
    if (phonenumber == "") {
      setPhoneNumberErr({
        phoneNumberErr: true,
      });
    } else if (phonenumber != "") {
      setPhoneNumberErr({
        phoneNumberErr: false,
      });
    }
    if (name == "") {
      setNameErr({
        NameErr: true,
      });
    } else if (name != "") {
      setNameErr({
        NameErr: false,
      });
    }
    if (password == "" && password.length < 8) {
      setPasswordErr({
        PasswrodErr: true,
      });
    } else if (password != "" && password.length >= 8) {
      setPasswordErr({
        PasswrodErr: false,
      });
    }
    if (confirmpassword == "") {
      setConfirmPasswordErr({
        ConfirmPasswordErr: true,
      });
    }

    const formData = {
      User_Name: name,
      Business_Or_Personal_Use: "Personal",
      Business_Name: "",
      Business_Address: "",
      Phone_Number: phonenumber,
      User_Password: password,
    };

    if (
      phonenumber == "" ||
      name == "" ||
      password == "" ||
      confirmpassword == "" ||
      confirmpassword != password
    ) {
      setIsSubmitted(false);
      alert("Please fill all fields correctly");
    } else if (
      phonenumber != "" &&
      name != "" &&
      password != "" &&
      confirmpassword != "" &&
      confirmpassword == password
    ) {
      setIsSubmitted(true);
      axios
        .post(`${root_url}api/SignUp`, formData)
        .then((res) => alert(res.data))
        .catch((err) => {
          alert(err);
          setIsSubmitted(false);
        });
    }
  };
  return (
    <View style={signup_styles.container}>
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
        {/*  First input */}
        <TextInput
          style={signup_styles.input}
          theme={{ colors: { primary: "#467ca4" } }}
          label="Enter Account Phone Number"
          name="phonenumber"
          value={phonenumber}
          onChangeText={(phonenumber) => setPhoneNumber(phonenumber)}
          keyboardType="phone-pad"
          error={phoneNumberErr && phonenumber == ""}
        />
        {/*  Second input */}
        <TextInput
          style={signup_styles.input}
          theme={{ colors: { primary: "#467ca4" } }}
          label="Enter Your Name"
          name="name"
          value={name}
          onChangeText={(name) => setName(name)}
          keyboardType="default"
          error={NameErr && name == ""}
        />
        {/* Password */}
        <TextInput
          style={signup_styles.input}
          theme={{ colors: { primary: "#467ca4" } }}
          label="Enter Password"
          showSoftInputOnFocus={true}
          name="password"
          value={password}
          onChangeText={(password) => {
            setPassword(password);
            if (password.length > 0 && password.length < 8) {
              setPasswordErr(true);
            } else {
              setPasswordErr(false);
            }
          }}
          secureTextEntry={true}
          keyboardType="default"
          error={PasswordErr && password.length < 8}
        />
        {/* Confirm Password */}
        <TextInput
          style={signup_styles.input}
          theme={{ colors: { primary: "#467ca4" } }}
          label="Enter Confirm Password"
          name="confirmpassword"
          value={confirmpassword}
          secureTextEntry={true}
          focusable={true}
          showSoftInputOnFocus={true}
          onChangeText={(confirmpassword) =>
            setConfirmPassword(confirmpassword)
          }
          keyboardType="default"
          error={
            (ConfirmPasswordErr && confirmpassword == "") ||
            confirmpassword != password
          }
        />
        {!isSibmitted ? (
          <Button
            labelStyle={{ fontSize: 17 }}
            style={signup_styles.signup_btn}
            mode="contained"
            onPress={Submit}
          >
            Sign Up
          </Button>
        ) : (
          <Image
            source={require("../../../assets/images/sayinkine_loading.gif")}
            style={signup_styles.styleGif}
          />
        )}
      </KeyboardAvoidingView>
      <Text style={signup_styles.login}>
        If you already have an account, please
        <Text
          style={signup_styles.loginText}
          onPress={() => history.push("/login")}
        >
          {" "}
          Login
        </Text>
      </Text>
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
    alignSelf: "center",
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
    alignSelf: "center",
  },
  loginText: {
    color: "#467ca4",
    fontWeight: "bold",
    fontSize: 16,
  },
  styleGif: {
    top: -25,
    alignSelf: "center",
  },
});
