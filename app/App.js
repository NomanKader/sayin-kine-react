import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";
import SignUpComponent from "./src/components/Authority/SignUp/SignUp";
import LoginComponent from "./src/components/Authority/SignUp/Login";
class App extends React.Component {
  render() {
    return (
      <View>
        <NativeRouter>
          <StatusBar style="light" backgroundColor="#467ca4" />
          <Switch>
            <Route exact path="/" component={SignUpComponent}/>
            <Route exact path="/login" component={LoginComponent}/>
          </Switch>
        </NativeRouter>
      </View>
    );
  }
}
export default App;
