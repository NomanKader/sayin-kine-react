import React, { useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
// import Icon from "react-native-vector-icons/EvilIcons";
import Calendar from "react-native-calendar-range-picker";
const CalendarComponent = () => {
  const refRBSheet = useRef();
  return (
    <View>
      <Text style={calendar_style.dialogTitle}>Custom Date Range</Text>
      <Calendar
        // startDate="2020-05-05"
        // endDate="2020-05-12"
        onChange={({ startDate, endDate }) =>
          console.log({ startDate, endDate })
        }
      />
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
