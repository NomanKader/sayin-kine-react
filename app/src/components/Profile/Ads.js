import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
const phonenumber_or_email = AsyncStorage.getItem("@ph_number");
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const Ads = () => {
  return (
    <SafeAreaView style={ads_style.container}>
      {/* Logo & Text */}
      <View style={ads_style.header}>
        <Image
          style={ads_style.logo}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={ads_style.headerText}>
          "Hey! , there is a good news.You can use the app without ads in just
          4.99$ per month.😊"
        </Text>
      </View>
      {/* Finished Logo & Text */}
      {reg.test(phonenumber_or_email) === false ? (
        <TextInput
          label="Enter your email"
          mode="outlined"
          style={ads_style.txt_input}
          theme={{ colors: { primary: "#0d3858" }, roundness: 8 }}
          outlineColor="#0d3858"
          //   onChangeText={text => setText(text)}
        />
      ) : (
        console.log("user account is in email")
      )}
      <Text style={ads_style.acceptable_text}>Acceptable Payment:</Text>
      <View style={ads_style.payment_icon_container}>
        <Avatar.Image
          style={ads_style.payment_icons}
          size={50}
          source={require("../../assets/images/visa.png")}
        />
        <Avatar.Image
          style={ads_style.payment_icons}
          size={50}
          source={require("../../assets/images/wave.png")}
        />
        <Avatar.Image
          style={ads_style.payment_icons}
          size={50}
          source={require("../../assets/images/kbzpay.png")}
        />
        <Avatar.Image
          style={ads_style.payment_icons}
          size={58}
          source={require("../../assets/images/kbzbank.png")}
        />
        <Avatar.Image
          style={ads_style.payment_icons}
          size={55}
          source={require("../../assets/images/ayabank.png")}
        />
      </View>
      <Button
        icon="credit-card-outline"
        style={ads_style.subscribe_btn}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Subscribe
      </Button>
    </SafeAreaView>
  );
};
export default Ads;
const ads_style = StyleSheet.create({
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
  subscribe_btn: {
    backgroundColor: "#0d3858",
    width: "55%",
    margin: 20,
    top: 13,
    alignSelf: "center",
  },
  acceptable_text: {
    display: "flex",
    alignSelf: "auto",
    margin: 10,
    left: 15,
    color: "#0d3858",
    fontWeight: "bold",
    fontSize: 15,
  },
  payment_icon_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  payment_icons: {
    backgroundColor: "transparent",
    marginLeft: 10,
    marginRight: 10,
  },
});
