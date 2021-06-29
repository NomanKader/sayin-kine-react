import React, { useRef } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";
import CalendarComponent from "./CalendarComponent.js";
import Icon from "react-native-vector-icons/EvilIcons";

const Dashboard = () => {
  const refRBSheet = useRef();

  return (
    <SafeAreaView style={dashboard_style.container}>
      <View style={dashboard_style.header}>
        <Image
          style={dashboard_style.logo}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={dashboard_style.headerText}>
          "Hey, this is your overall income and expense report"
        </Text>
      </View>
      <Button
        mode="contained"
        style={dashboard_style.dateBtn}
        labelStyle={{ color: "#fff" }}
        icon="calendar"
        onPress={() => refRBSheet.current.open()}
      >
        <Text style={{ fontSize: 14 }}>Jun 1-Jun 24,2021</Text>
      </Button>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={600}
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
          draggableIcon: {
            backgroundColor: "#B2BABB",
            width: 50,
          },
        }}
      >
        <TouchableOpacity>
          <Icon
            name="close"
            size={24}
            style={dashboard_style.close_tbn}
            onPress={() => refRBSheet.current.close()}
          />
        </TouchableOpacity>
        <CalendarComponent />
      </RBSheet>
    </SafeAreaView>
  );
};

export default Dashboard;

const dashboard_style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  logo: {
    top: 40,
    left: 20,
    width: 88,
    height: 123,
  },
  headerText: {
    top: 30,
    width: 250,
    fontSize: 16,
    textAlign: "center",
    color: "#0d3858",
    fontWeight: "bold",
  },
  dateBtn: {
    top: 50,
    width: "50%",
    alignSelf: "flex-end",
    right: 20,
    backgroundColor: "#0d3858",
    elevation: 20,
  },
  iconStyle: {
    fontSize: 40,
    marginTop: 30,
    color: "black",
  },
  close_tbn: {
    left: 20,
  },
});
