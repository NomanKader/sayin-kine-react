
import { StatusBar } from "expo-status-bar";
import React,{useEffect} from "react";
import { ProgressViewIOSComponent, View } from "react-native";
import { NativeRouter, Route, Switch,componentDidMount, Router } from "react-router-native";
import SignUpComponent from "./src/components/Authority/SignUp/SignUp";
import LoginComponent from "./src/components/Authority/SignUp/Login";
import HomeComponent from "./src/components/Home/Home";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'
import history from 'history'
import Home from "./src/components/Home/Home";
const App=(history)=>{
  const [token,setToken]=React.useState("");
  useEffect(() => {
    // write your code here, it's like componentWillMount
    isSignedIn();
}, [])
const isSignedIn=()=>{
  setToken({
    token:AsyncStorage.getItem("token",(err,item)=>item)
  })
}
  return (
    <View>
        <StatusBar style="light" backgroundColor="#467ca4" />
      <NativeRouter>
        <Switch>
          {token==""}?
          <Route exact path="/" component={LoginComponent}/>:
          <Route exact path="/" component={HomeComponent}/>
          <Route exact path="/signup" component={SignUpComponent}/>
          <Route exact path="/login" component={LoginComponent}/>
          <Route exact path="/home" component={HomeComponent}/>
        </Switch>
      </NativeRouter>
    </View>
  );
}
export default App;