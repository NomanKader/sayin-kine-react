import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";

const Phone = () => {
  return (
    <SafeAreaView style={phone_style.container}>
      {/* Logo & Text */}
      <View style={phone_style.header}>
        <Image
          style={phone_style.logo}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={phone_style.headerText}>
          "Hey! , your previous phone number or email is "09966035221".You can
          change here😊"
        </Text>
      </View>
      {/* Finished Logo & Text */}
      <TextInput
        label="Enter new Phone Number or Email"
        mode="outlined"
        style={phone_style.txt_input}
        theme={{ colors: { primary: "#0d3858" },roundness:8 }}
        outlineColor="#0d3858"
        //   onChangeText={text => setText(text)}
      />
      <Button
        icon="content-save"
        style={phone_style.save_btn}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Save
      </Button>
    </SafeAreaView>
  );
};

export default Phone;

const phone_style = StyleSheet.create({
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
    margin: 20,
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
