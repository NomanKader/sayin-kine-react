import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text,Image, View } from 'react-native';
import SignUpComponent from './src/components/Authority/SignUp/SignUp'
class  App extends React.Component{
  render(){
    return(
      <View>
      <SignUpComponent/>
      {/* <Text>asfsdf</Text> */}
      </View>
    )
  }
}
export default App

