import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";


const StartingBudget = ({history}) => {
  // data handling
  const [budgetData, setBudgetData] = useState("");

  // error handling
  const [numberCheckErr, setnumberCheckErr] = useState(false);

  let budgetAmount = parseInt(budgetData.replace(/[%()*/+-]/g, ""))

  const sendData = (e) => {
    e.preventDefault();
    if (budgetAmount > 0) {
      alert(`Your Starting budget is ${budgetAmount}.`);
      history.push('/home')
    } else {
      setnumberCheckErr(true);
      alert("Please fill the starting amount.");
    }
  };
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
        name="budgetData"
        value={budgetData}
        onChangeText={(budgetData) => setBudgetData(budgetData)}
        error={numberCheckErr && budgetData == ""}
      />
      <Text style={budget_form.textStyle}>
        Hey ! let me know your {"\n    "} starting budget 😊
      </Text>
      <Button
        style={budget_form.button}
        labelStyle={{ fontSize: 18 }}
        uppercase={false}
        mode="contained"
        onPress={sendData}
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
