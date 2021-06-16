import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";

const Expense = () => {
  return (
    <View>
      <Chart
        style={expense_style.chart}
        data={[
          { x: -2, y: 15 },
          { x: -1, y: 10 },
          { x: 0, y: 12 },
          { x: 1, y: 7 },
          { x: 2, y: 6 },
          { x: 3, y: 8 },
          { x: 4, y: 10 },
          { x: 5, y: 8 },
          { x: 6, y: 12 },
          { x: 7, y: 14 },
          { x: 8, y: 12 },
          { x: 9, y: 13.5 },
          { x: 10, y: 18 },
        ]}
        padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: -2, max: 10 }}
        yDomain={{ min: 0, max: 20 }}
      >
        <VerticalAxis
          tickCount={7}
          theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
        />
        <HorizontalAxis tickCount={5} />
        <Area
          theme={{
            gradient: {
              from: { color: "#2471A3" },
              to: { color: "#2471A3", opacity: 0.4 },
            },
          }}
        />
        <Line
          theme={{
            stroke: { color: "#2471A3", width: 5 },
            scatter: {
              default: { width: 4, height: 4, color: "#fff" },
            },
          }}
        />
      </Chart>
      <Text style={expense_style.chartTitleText}>Expense</Text>
    </View>
  );
};

export default Expense;

const expense_style = StyleSheet.create({
  chart: {
    height: 100,
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 30,
  },
  chartTitleText: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#fff",
    fontSize: 18,
    alignSelf: "center",
  },
});
