import React, {useRef} from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

const CalendarComponent = () => {
  const refRBSheet = useRef();
  return (
    <View>

      <Text style={calendar_style.dialogTitle}>Custom Date Range</Text>
    </View>
  );
};

export default CalendarComponent;

const calendar_style = StyleSheet.create({
  close_tbn: {
    left: 20,
  },
  dialogTitle: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
