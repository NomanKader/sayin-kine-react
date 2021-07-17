import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";

const Password = () => {
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");
  const [PasswordErr, setPasswordErr] = React.useState(false);
  const [ConfirmPasswordErr, setConfirmPasswordErr] = React.useState(false);
  return (
    <SafeAreaView>
      {/* Logo & Text */}
      <View style={password_style.header}>
        <Image
          style={password_style.logo}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={password_style.headerText}>
          "Hey! , change your password here😊"
        </Text>
      </View>
      {/* Finished Logo & Text */}
      <TextInput
        label="Enter old password"
        mode="outlined"
        style={password_style.txt_input}
        theme={{ colors: { primary: "#0d3858" } }}
        showSoftInputOnFocus={true}
        secureTextEntry={true}
      />
      <TextInput
        label="Enter new password"
        mode="outlined"
        style={password_style.txt_input}
        theme={{ colors: { primary: "#0d3858" } }}
        showSoftInputOnFocus={true}
        secureTextEntry={true}
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
        error={PasswordErr && password.length < 8}
      />
      <TextInput
        label="Confirm new password"
        mode="outlined"
        style={password_style.txt_input}
        theme={{ colors: { primary: "#0d3858" } }}
        showSoftInputOnFocus={true}
        secureTextEntry={true}
        name="confirmpassword"
        value={confirmpassword}
        onChangeText={(confirmpassword) => setConfirmPassword(confirmpassword)}
        keyboardType="default"
        error={
          (ConfirmPasswordErr && confirmpassword == "") ||
          confirmpassword != password
        }
      />
      <Button
        icon=""
        style={password_style.save_btn}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Save
      </Button>
    </SafeAreaView>
  );
};

export default Password;

const password_style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  logo: {
    top: 20,
    left: 20,
    width: 88,
    height: 123,
  },
  headerText: {
    top: 20,
    width: 250,
    fontSize: 16,
    textAlign: "center",
    color: "#0d3858",
    fontWeight: "bold",
  },
  //text input style
  txt_input: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    color: "#467ca4",
  },
  save_btn: {
    backgroundColor: "#0d3858",
    width: "30%",
    margin: 20,
    alignSelf: "center",
  },
});
