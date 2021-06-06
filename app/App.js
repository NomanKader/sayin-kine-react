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

  useEffect(() => {
    isSignedIn();
  }, []);

  const isSignedIn = async () => {
    try {
      const localData = await AsyncStorage.getItem("@token");
      console.log(localData);
      setToken(localData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <NativeRouter>
        <StatusBar style="light" backgroundColor="#467ca4" />
        <Switch>
          {token != "" && token != null ? (
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
