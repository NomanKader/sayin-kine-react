import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";

const StartingBudget = () => {
  return (
    <View style={budget_form.root}>
      <Image
        style={budget_form.logo}
        source={require("../assets/images/logo.png")}
      />
      <TextInput
        mode="outlined"
        style={budget_form.input}
        theme={{ colors: { primary: "#0D3858" } }}
        label="Enter your Budget Money"
        keyboardType="numeric"
        outlineColor="#0D3858"
      />
      <Text style={budget_form.textStyle}>
        Hey ! let me know your {"\n    "} starting budget 😊
      </Text>
      <Button
        style={budget_form.button}
        labelStyle={{ fontSize: 18 }}
        uppercase={false}
        mode="contained"
        onPress={() => alert("hello")}
      >
        Let's Go !
      </Button>
    </View>
  );
};

export default StartingBudget;

const budget_form = StyleSheet.create({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    top: 170,
    width: 114,
    height: 160,
  },
  input: {
    marginTop: 200,
    width: 320,
    backgroundColor: "#fff",
    borderColor: "#0D3858",
  },
  textStyle: {
    marginTop: 40,
    fontSize: 16,
    fontWeight: "600",
    color: "#0D3858",
  },
  button: {
    width: "60%",
    height: "auto",
    borderRadius: 20,
    marginTop: 150,
    justifyContent: "center",
    backgroundColor: "#0D3858",
  },
});
