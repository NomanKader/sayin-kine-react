import React, { useRef } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Button, DataTable, FAB, IconButton, Title } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";
import Icon from "react-native-vector-icons/EvilIcons";
import { BarChart } from "react-native-chart-kit";
import Calendar from "react-native-calendar-range-picker";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [10, 20, 40, 60, 80, 100, 40, 20, 40, 60, 80, 100, 40],
    },
  ],
};

const Dashboard = () => {
  const findDateDifference = (start, end) => {
    console.log(start, end);
    const startRange = new Date(start);
    const endRange = new Date(end);
    const differenceTime = endRange.getTime() - startRange.getTime();
    const differenceDay = differenceTime / (1000 * 3600 * 24);
    // console.log(differenceDay);
    if (differenceDay <= 7) {
      console.log("Daily");
    } else if (differenceDay <= 30 || differenceDay <= 31) {
      console.log("Weekly");
    } else if (differenceDay <= 365) {
      console.log("Monthly");
    }
  };

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
      <ScrollView style={dashboard_style.dataContainer}>
        <Title style={dashboard_style.chartTitle}> Income Chart</Title>
        <BarChart
          style={dashboard_style.chart}
          data={data}
          width={Dimensions.get("window").width}
          height={300}
          yAxisSuffix="%"
          showValuesOnTopOfBars={true}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#0d3858",
            backgroundGradientTo: "#2f2f2f",
            barPercentage: 0.4,
            fillShadowGradient: `rgba(1, 122, 205, 1)`,
            fillShadowGradientOpacity: 1,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          verticalLabelRotation={90}
        />
        <Title style={dashboard_style.chartTitle}> Expense Chart</Title>
        <BarChart
          style={dashboard_style.chart}
          data={data}
          width={Dimensions.get("window").width}
          height={300}
          yAxisSuffix="%"
          showValuesOnTopOfBars={true}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#0d3858",
            backgroundGradientTo: "#2f2f2f",
            barPercentage: 0.4,
            fillShadowGradient: `rgba(1, 122, 205, 1)`,
            fillShadowGradientOpacity: 1,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          verticalLabelRotation={90}
        />
        <DataTable style={dashboard_style.datatable}>
          <DataTable.Header>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title numeric>Type</DataTable.Title>
            <DataTable.Title numeric>Title</DataTable.Title>
            <DataTable.Title numeric>Amount</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>2021/07/12</DataTable.Cell>
            <DataTable.Cell numeric>Income</DataTable.Cell>
            <DataTable.Cell numeric>Job</DataTable.Cell>
            <DataTable.Cell numeric>200000</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>2021/07/12</DataTable.Cell>
            <DataTable.Cell numeric>Income</DataTable.Cell>
            <DataTable.Cell numeric>Job</DataTable.Cell>
            <DataTable.Cell numeric>200000</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>2021/07/12</DataTable.Cell>
            <DataTable.Cell numeric>Income</DataTable.Cell>
            <DataTable.Cell numeric>Job</DataTable.Cell>
            <DataTable.Cell numeric>200000</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>2021/07/12</DataTable.Cell>
            <DataTable.Cell numeric>Income</DataTable.Cell>
            <DataTable.Cell numeric>Job</DataTable.Cell>
            <DataTable.Cell numeric>200000</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>2021/07/12</DataTable.Cell>
            <DataTable.Cell numeric>Income</DataTable.Cell>
            <DataTable.Cell numeric>Job</DataTable.Cell>
            <DataTable.Cell numeric>200000</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </ScrollView>
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
          <IconButton
            icon="close"
            size={24}
            style={dashboard_style.close_tbn}
            onPress={() => refRBSheet.current.close()}
          />
        </TouchableOpacity>
        <Text style={calendar_style.dialogTitle}>Custome Date Range</Text>
        <Calendar
          onChange={({ startDate, endDate }) => {
            findDateDifference(startDate, endDate);
          }}
        />
        <FAB
          style={dashboard_style.fab}
          icon="check-underline"
          onPress={() => console.log("Pressed")}
        />
      </RBSheet>
      <FAB
        style={dashboard_style.fab}
        icon="plus"
        onPress={() => console.log("Pressed")}
      />
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
    // top: 50,
    marginTop: 30,
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
  dataContainer: {
    marginTop: "5%",
  },
  chartTitle: {
    alignSelf: "center",
    // padding: 5,
    textTransform: "uppercase",
    color: "#0d3858",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  chart: {
    marginTop: 20,
    marginBottom: 20,
  },
  datatable: {
    marginBottom: 20,
    shadowColor: "#C8D3DF",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1.12,
    elevation: 1,
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 16,
    color: "#fff",
    backgroundColor: "#0d3858",
  },
});

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
