import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{useEffect} from "react";
import { View,StyleSheet,Text } from "react-native";
import {Button} from 'react-native-paper';
const Home = () => {
    useEffect(() => {
        // write your code here, it's like componentWillMount
        // AsyncStorage.getItem("token",(err,item)=>alert(item));
    }, [])
    return (
        <View style={home_styles.container}>
            <Button  style={home_styles.heading}>This is home page.</Button>
        </View>
    );

}
export default Home;
const home_styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:'#ffffff',
    },
    heading: {
        flex:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});
