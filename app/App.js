import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View } from "react-native";
import { NativeRouter, Route, Router, Switch } from "react-router-native";
import SignUpComponent from "./src/components/Authority/SignUp/SignUp";
import LoginComponent from "./src/components/Authority/SignUp/Login";
import HomeComponent from "./src/components/Home/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const App = () => {
  const [token, setToken] = React.useState("");
  const root_url = "https://sayinkineapi.nksoftwarehouse.com/";
  useEffect(() => {
    isSignedIn();
  }, []);

  const isSignedIn = async () => {
    try {
      const localData = await AsyncStorage.getItem("@token");
      const localPhone = await AsyncStorage.getItem("@ph_number")
      if (localData != "" && localData != null) {
        //that means token exist
        axios
          .post(
            `${root_url}api/ValidateToken?phone_number=${localPhone}&token=${localData}`
          )
          .then((res) => {
            if (res.data == "401") {
              //if it is not valid token
              alert("Token not valid");
              AsyncStorage.removeItem("@token");
              AsyncStorage.removeItem('@ph_number')
              // localData = AsyncStorage.getItem("@token");
              setToken(localData);
              setComponent(LoginComponent);
              // history.push("/home");
            } else {
              //if token is valid
              console.log(token);
            }
          })
          .catch((err) => console.log(err));
      } else {
        //if token not exist
        setToken(localData);
      }
      // setToken(localData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <NativeRouter>
        <StatusBar style="light" backgroundColor="#467ca4" />
        <Switch>
          {token != null ? (
            <Route exact path="/" component={HomeComponent} />
          ) : (
            <Route exact path="/" component={LoginComponent} />
          )}
          <Route exact path="/signup" component={SignUpComponent} />
          <Route exact path="/home" component={HomeComponent} />
          <Route exact path="/login" component={LoginComponent} />
        </Switch>
      </NativeRouter>
    </View>
  );
};
export default App;
