import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Platform } from "react-native";
import { NativeRouter, Route, Router, Switch } from "react-router-native";
import SignUpComponent from "./src/components/Authority/SignUp/SignUp";
import LoginComponent from "./src/components/Authority/SignUp/Login";
import StartingBudget from "./src/components/StartingBudget";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Navigation from "./src/components/Navigation/Navigation";
const token = AsyncStorage.getItem("@token");
console.log(token);
const localPhone = AsyncStorage.getItem("@ph_number");
const App = () => {
  const [toggle, setToggle] = React.useState(false);
  // const [session, setSession] = React.useState("");
  const root_url = "https://sayinkineapi.nksoftwarehouse.com/";

  useEffect(() => {
    if (token == "" || token == null) {
      setToggle(false);
    } else {
      ValidateToken();
    }
    // isSignedIn();
  }, []);

  // const checkToken = async () => {
  //   try {
  //     const validToken = await AsyncStorage.getItem("@checkSession");
  //     if (validToken == "invalid token") {
  //       alert("Session expire");
  //       setSession(validToken);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const ValidateToken = () => {
    // setToken(false);
    axios
      .post(
        `${root_url}api/ValidateToken?phone_number=${localPhone}&token=${token}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data == "401" || res.data == null) {
          // AsyncStorage.removeItem("@token");
          // AsyncStorage.removeItem("@ph_number");
          setToggle(false);
        } else {
          //if token is valid
          console.log("is valid");
          setToggle(true);
        }
      })
      .catch((err) => console.log(err));
  };

  // console.log(token);

  return (
    <NativeRouter>
      <View
        style={{
          backgroundColor: "#467ca4",
          height: Platform.OS === "ios" ? 38 : StatusBar.currentHeight,
        }}
      >
        <StatusBar style="light" backgroundColor="#467ca4" />
      </View>
      <Switch>
        {toggle === true ? (
          <Route exact path="/" component={Navigation} />
        ) : (
          <Route exact path="/" component={LoginComponent} />
        )}
        <Route exact path="/" component={Navigation} />
        <Route exact path="/signup" component={SignUpComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/starting_budget" component={StartingBudget} />
        <Route exact path="/navigation" component={Navigation} />
      </Switch>
    </NativeRouter>
  );
};
export default App;
