import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";
import SignUpComponent from "./src/components/Authority/SignUp/SignUp";
import LoginComponent from "./src/components/Authority/SignUp/Login";
import HomeComponent from "./src/components/Home/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
const App = () => {
  const [token, setToken] = React.useState("");

  AsyncStorage.getItem("token", (item) => setToken(item));
  // useEffect(() => {
  //   isSignedIn();
  // }, []);

  // const isSignedIn = () => {
  //   AsyncStorage.getItem("token", (item) => setToken(item));
  // };

  return (
    <View>
      <NativeRouter>
        <StatusBar style="light" backgroundColor="#467ca4" />
        <Switch>
          {token != "" ? (
            <Route path="/" component={HomeComponent} />
          ) : (
            <Route path="/" component={LoginComponent} />
          )}
          <Route path="/signup" component={SignUpComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/home" component={HomeComponent} />
        </Switch>
      </NativeRouter>
    </View>
  );
};
export default App;
