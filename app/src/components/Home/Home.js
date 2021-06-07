import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View,StyleSheet } from "react-native";
import {Button} from 'react-native-paper';
const Home = ({history}) => {
    return (
        <View style={home_styles.container}>
            <Button  style={home_styles.heading} onPress={()=>history.push('/starting_budget')}>This is home page.</Button>
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
