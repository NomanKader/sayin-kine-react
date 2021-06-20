import React from 'react';
import { 
     SafeAreaView,
     Text ,
     StyleSheet,
     View , 
     Image, 
     TextInput,
     Pressable,
     TouchableOpacity}

from 'react-native';

import IonIcons from "react-native-vector-icons/AntDesign";



const Category = () => {

    return (
        <SafeAreaView style={{ height: "100%" }}>
             <View style={categoryStyle.header}>
        <Image
          style={categoryStyle.logo}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={categoryStyle.headerText}>
          
          "Hey, let's create {"\n"}category & choose icon to use in your income and expense."
        </Text>
      </View>
     
      <View style={{ marginTop:50, alignSelf:"center"}}>
      <TextInput
          style={categoryStyle.firstInput}
          placeholderTextColor={'#707070'}
          placeholderStyle={{ fontFamily: "Cambria" }}
        //  theme={{ colors: { primary: "#467ca4" } }}      
          placeholder="          Enter category title"
           /> 
        <Text style={{marginLeft:40,marginBottom:15,color:'#2F6994',fontWeight:'Bold'}}>
          eg:food,drink,etc...
        </Text>
        </View>
{/*         input field and add icon
 */}       
 
 
     <View style={{flexDirection:'row' , alignSelf:'center'}}>

        <TextInput
        placeholderTextColor={'#707070'}
        placeholderStyle={{ fontFamily: "Cambria" }}
        style={categoryStyle.secondInput}
      //  theme={{ colors: { primary: "#467ca4" } }}
        placeholder="          Choose icon" 
        

      /> 

      <TouchableOpacity style={{ position: 'absolute' ,zIndex:1, left:'85%',top:'15%'}}>
          <IonIcons name="plus" style={categoryStyle.addButton} size={30} />
        </TouchableOpacity>
        </View>


    <View style={{alignContent:'center',justifyContent:'center',alignItems:'center'}}>

    <Pressable style={categoryStyle.button}>
      <Text style={categoryStyle.buttonText} >Let's Create</Text>
    </Pressable>
    
    </View>
        </SafeAreaView>
    )
}

export default Category;

const categoryStyle = StyleSheet.create({
    header: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft:15
      },
    logo: {
        top: 10,
        width: 50,
        height: 90,
      },
      headerText: {
        fontSize: 24,
        marginTop: 30,
        marginLeft:15,
        color: "#0d3858",
        fontFamily:"Cambria",
      },
 
      firstInput: {
        
        marginBottom: 5,
        backgroundColor: "#fff",
        color: "#467ca4",
        width: 300,
        height:50,
        alignSelf: "center",
        borderWidth:2,
        borderRadius:20,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        borderColor:"gray",
        

      },

      secondInput:{
        marginBottom: 5,
        backgroundColor: "#fff",
        color: "#467ca4",
        width: 300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderRadius:20,
        borderColor:"gray"   

      },
      
      button:{
          marginTop:20,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 20,
          elevation: 3,
          backgroundColor: '#2F6994',
          width:'200',
          
      },
      buttonText: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
        fontFamily:'CambriabBold',
        fontWeight:'Bold'
      },
      addButton:{
        alignSelf: "center",
        top: 50,
        color: "black",
      }

})


