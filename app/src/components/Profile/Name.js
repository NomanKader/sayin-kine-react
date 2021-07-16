import React from 'react'
import {View,Text,StyleSheet,SafeAreaView,Image} from 'react-native'
import { TextInput,Button } from 'react-native-paper'
const Name=()=>{
    return(
        <SafeAreaView style={name_style.container}>   
        {/* Logo & Text */}
         <View style={name_style.header}>
         <Image
             style={name_style.logo}
             source={require("../../assets/images/logo.png")}
         />
         <Text style={name_style.headerText}>
             "Hey! , your previous username is Pyae Phyo Swe.You can change here😊"
         </Text>
     </View>
     {/* Finished Logo & Text */}
     <TextInput
          label="Enter new username"
          mode='outlined'
          style={name_style.txt_input}
          theme={{ colors: { primary: "#0d3858" } }}
        //   onChangeText={text => setText(text)}
        />
          <Button icon="" style={name_style.save_btn} mode="contained" onPress={() => console.log('Pressed')}>
        Save
      </Button>
     </SafeAreaView>
    )
}
export default Name;
const name_style=StyleSheet.create({
container:{ 
    width:'100%',
    height:'100%',
    backgroundColor:'#fff',
},
header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  logo: {
    top: 20,
    left: 20,
    width: 88,
    height: 123,
  },
  headerText: {
    top: 20,
    width: 250,
    fontSize: 16,
    textAlign: "center",
    color: "#0d3858",
    fontWeight: "bold",
  },
 //text input style
 txt_input:{
    margin:20,
    marginTop:40,
    color: "#467ca4",
},
save_btn:{
    backgroundColor:'#0d3858',
    width:'30%',
    margin:20,
    alignSelf:'center'
}
})