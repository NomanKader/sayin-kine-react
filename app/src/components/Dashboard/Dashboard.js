import React, { useRef, useEffect } from "react";
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
import {
  Button,
  DataTable,
  FAB,
  IconButton,
  Title,
  RadioButton,
} from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";
import { BarChart } from "react-native-chart-kit";
import Calendar from "react-native-calendar-range-picker";
import { Badge } from "react-native-elements";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const root_url = "https://sayinkineapi.nksoftwarehouse.com/";

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
  let current = new Date();
  let month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  const year = current.getFullYear();
  let currentMonth = current.getMonth() + 1;
  let startDate = current.getDate() - 7;
  let endDate = current.getDate();
  if (currentMonth < 10) {
    currentMonth = "0" + currentMonth;
  }
  if (startDate < 10) {
    startDate = "0" + startDate;
  }
  if (endDate < 10) {
    endDate = "0" + endDate;
  }
  const start = `${year}-${currentMonth}-${startDate}`;
  const end = `${year}-${currentMonth}-${endDate}`;
  const [checked, setChecked] = React.useState("all");
  const [tableData, setTableData] = React.useState([]);
  const [currentDate, setCurrentDate] = React.useState("");
  const [startDateRange, setStartDateRange] = React.useState(start);
  const [endDateRange, setEndDateRange] = React.useState(end);

  useEffect(() => {
    showDateInButton();
    getTableData();
  }, []);

  const calendarRef = useRef();
  const filterRef = useRef();

  const getTableData = async () => {
    const phone_number_or_email = await AsyncStorage.getItem("@ph_number");
    try {
      axios
        .get(
          `${root_url}/api/dashboard?phonenumber_or_email=${phone_number_or_email}&from_date=${startDateRange}&to_date=${endDateRange}&report_type=${checked}`
        )
        .then((res) => {
          setTableData(res.data);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      alert(error);
    }
  };

  const showDateInButton = () => {
    let date = `${month[current.getMonth()]} ${current.getDate() - 7}-${
      month[current.getMonth()]
    } ${current.getDate()}, ${current.getFullYear()}`;
    setCurrentDate(date);
  };

  const findDateDifference = (start, end) => {
    setStartDateRange(start);
    setEndDateRange(end);
    const startRange = new Date(start);
    const endRange = new Date(end);
    let date = `${
      month[startRange.getMonth()]
    } ${startRange.getDate()} ${startRange.getFullYear()} - ${
      month[endRange.getMonth()]
    } ${endRange.getDate()} ${endRange.getFullYear()}`;
    setCurrentDate(date);
    const differenceTime = endRange.getTime() - startRange.getTime();
    const differenceDay = differenceTime / (1000 * 3600 * 24);
    if (differenceDay <= 7) {
      console.log("Daily");
    } else if (differenceDay <= 30 || differenceDay <= 31) {
      console.log("Weekly");
    } else if (differenceDay <= 365) {
      console.log("Monthly");
    }
  };

  return (
    <SafeAreaView style={dashboard_style.container}>
      <View style={dashboard_style.header}>
        <Image
          style={dashboard_style.logo}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={dashboard_style.headerText}>
          "Hey! , here is your overall income and expense report"
        </Text>
      </View>
      <Button
        mode="contained"
        style={dashboard_style.dateBtn}
        labelStyle={{ color: "#fff" }}
        icon="calendar"
        onPress={() => calendarRef.current.open()}
      >
        <Text style={{ fontSize: 14 }}>{currentDate}</Text>
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
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            barPercentage: 0.4,
            fillShadowGradient: `rgba(1, 122, 205, 1)`,
            fillShadowGradientOpacity: 1,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#000000",
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
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            barPercentage: 0.4,
            fillShadowGradient: "#c2b280",
            fillShadowGradientOpacity: 1,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
            <DataTable.Title>No</DataTable.Title>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title numeric>Type</DataTable.Title>
            <DataTable.Title numeric>Title</DataTable.Title>
            <DataTable.Title numeric>Amount</DataTable.Title>
          </DataTable.Header>

          {tableData.map((data) => {
            return (
              <DataTable.Row key={data.No}>
                <DataTable.Cell>{tableData.indexOf(data) + 1}</DataTable.Cell>
                <DataTable.Cell style={{ width: "100%" }}>
                  {data.Transaction_DateTime}
                </DataTable.Cell>
                <DataTable.Cell numeric>{data.Transaction_Type}</DataTable.Cell>
                <DataTable.Cell numeric>{data.Category}</DataTable.Cell>
                <DataTable.Cell numeric>
                  {data.Transaction_Amount}
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
      </ScrollView>
      <RBSheet
        ref={calendarRef}
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
            onPress={() => calendarRef.current.close()}
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
          onPress={() => {
            getTableData();
            calendarRef.current.close();
          }}
        />
      </RBSheet>
      <RBSheet
        ref={filterRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={300}
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
            onPress={() => filterRef.current.close()}
          />
        </TouchableOpacity>
        <Text style={calendar_style.dialogTitle}>Custome Filter</Text>
        <View style={filter_style.radioContainer}>
          <RadioButton
            value="all"
            status={checked === "all" ? "checked" : "unchecked"}
            onPress={() => setChecked("all")}
            color="#0d3858"
          />
          <Text style={filter_style.text}>All</Text>
          <RadioButton
            value="income"
            status={checked === "income" ? "checked" : "unchecked"}
            onPress={() => setChecked("income")}
            color="#0d3858"
          />
          <Text style={filter_style.text}>Income</Text>
          <RadioButton
            value="expense"
            status={checked === "expense" ? "checked" : "unchecked"}
            onPress={() => setChecked("expense")}
            color="#0d3858"
          />
          <Text style={filter_style.text}>Expense</Text>
        </View>
        <FAB
          style={dashboard_style.fab}
          icon="check-underline"
          onPress={() => {
            getTableData();
            filterRef.current.close();
          }}
        />
      </RBSheet>
      {checked === "all" ? (
        <Badge
          value="0"
          status="primary"
          containerStyle={dashboard_style.badge}
          textStyle={{ fontSize: 15, fontWeight: "bold" }}
        />
      ) : (
        <Badge
          value="1"
          status="primary"
          containerStyle={dashboard_style.badge}
          textStyle={{ fontSize: 15, fontWeight: "bold" }}
        />
      )}
      <FAB
        style={dashboard_style.fab}
        icon="filter"
        onPress={() => filterRef.current.open()}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const dashboard_style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
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
    width: "60%",
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
    alignSelf: "flex-start",
    textTransform: "uppercase",
    color: "#0d3858",
    fontWeight: "bold",
    fontSize: 18,
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
    elevation: 10,
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 16,
    color: "#fff",
    backgroundColor: "#0d3858",
  },
  badge: {
    position: "absolute",
    right: 45,
    bottom: 35,
    margin: 16,
    elevation: 40,
    zIndex: 1,
  },
});

const calendar_style = StyleSheet.create({
  close_tbn: {
    left: 20,
    color: "#0d3858",
  },
  dialogTitle: {
    top: 0,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#0d3858",
  },
});

const filter_style = StyleSheet.create({
  radioContainer: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    marginRight: 20,
    color: "#0d3858",
    fontSize: 18,
  },
});
