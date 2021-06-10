import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View } from "react-native";
import { NativeRouter, Route, Router, Switch } from "react-router-native";
import SignUpComponent from "./src/components/Authority/SignUp/SignUp";
import LoginComponent from "./src/components/Authority/SignUp/Login";
import HomeComponent from "./src/components/Home/Home";
import StartingBudget from "./src/components/StartingBudget";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const App = () => {
  const [token, setToken] = React.useState("");
  const [session, setSession] = React.useState("");
  const root_url = "https://sayinkineapi.nksoftwarehouse.com/";
  useEffect(() => {
    isSignedIn();
  }, []);

  const checkToken = async () => {
    try {
      const validToken = await AsyncStorage.getItem("@checkSession");
      if (validToken == "invalid token") {
        alert("Session expire");
        setSession(validToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isSignedIn = async () => {
    try {
      // AsyncStorage.clear();
      const localData = await AsyncStorage.getItem("@token");
      const localPhone = await AsyncStorage.getItem("@ph_number");
      if (localData != "" && localData != null) {
        //that means token exist
        axios
          .post(
            `${root_url}api/ValidateToken?phone_number=${localPhone}&token=${localData}`
          )
          .then((res) => {
            console.log(res.data);
            if (res.data == "401" || res.data == null) {
              //if it is not valid token
              AsyncStorage.removeItem("@token");
              AsyncStorage.removeItem("@ph_number");
              AsyncStorage.setItem("@checkSession", "invalid token");
              checkToken();
            } else if (res.data == "202") {
              //if token is valid
              console.log("is valid");
              AsyncStorage.removeItem("@checkSession");
            }
          })
          .catch((err) => console.log(err));
      } else {
        //if token not exist
        setToken(localData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <NativeRouter>
        <StatusBar style="light" backgroundColor="#467ca4" />
        <Switch>
          {token != null && session != "invalid token" ? (
            <Route exact path="/" component={StartingBudget} />
          ) : (
            <Route exact path="/" component={LoginComponent} />
          )}
          <Route exact path="/signup" component={SignUpComponent} />
          <Route exact path="/home" component={HomeComponent} />
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/starting_budget" component={StartingBudget} />
        </Switch>
      </NativeRouter>
    </View>
  );
};
export default App;
