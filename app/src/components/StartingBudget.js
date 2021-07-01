import axios from "axios";
import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import {
  Button,
  TextInput,
  Paragraph,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const root_url = "https://sayinkineapi.nksoftwarehouse.com/";

const StartingBudget = ({ history }) => {
  // data handling
  const [budgetData, setBudgetData] = useState("");

  // error handling
  const [numberCheckErr, setnumberCheckErr] = useState(false);

  let budgetAmount = parseInt(budgetData.replace(/[%()*/+-]/g, ""));

  // const [visible, setVisible] = React.useState(false);

  // const showDialog = () => setVisible(true);

  // const hideDialog = () => setVisible(false);

  const sendData = async (e) => {
    e.preventDefault();
    const checkNumber = await AsyncStorage.getItem("@ph_number");
    try {
      if (budgetAmount > 0) {
        const budget_data = {
          Phone_Number_Or_Email: checkNumber,
          Budget: budgetAmount,
          Currency: "MMK",
        };
        axios
          .post(`${root_url}api/Budget`, budget_data)
          .then((res) => {
            if (res.data == "202") {
              console.log("success")
            } else if (res.data == "500"){
              console.log("error in post")
            }
            history.push("/navigation");
          })
          .catch((err) => console.log(err.message));
      } else {
        setnumberCheckErr(true);
        alert("Please fill the starting amount.");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Provider>
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

        {/* <TextInput
          mode="outlined"
          style={budget_form.input}
          theme={{ colors: { primary: "#0D3858" } }}
          label="Enter your Currency"
          // keyboardType="numeric"
          outlineColor="#0D3858"
          name="currency"
          onFocus={showDialog}
          // value={currency}
          // onChangeText={(budgetData) => setBudgetData(budgetData)}
          // error={numberCheckErr && budgetData == ""}
        /> */}

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
        {/* <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal> */}
      </View>
    </Provider>
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
    top: 180,
    width: 320,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderColor: "#0D3858",
    // fontFamily:'Cambria'
  },
  textStyle: {
    top: 200,
    fontSize: 16,
    fontWeight: "600",
    color: "#0D3858",
    // fontFamily:'SegoeUI'
  },
  button: {
    width: "60%",
    height: "auto",
    borderRadius: 20,
    top: 300,
    justifyContent: "center",
    backgroundColor: "#0D3858",
    // fontFamily:'SegoeUI'
  },
});
