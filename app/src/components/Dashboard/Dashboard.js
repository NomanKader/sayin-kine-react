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

const Dashboard = () => {
  let expTitle = [];
  let expValue = [];
  let incTitle = [];
  let incValue = [];

  // console.log(expValue, incValue);

  let current = new Date();
  let dateback = new Date(current.getTime() - 8 * 24 * 60 * 60 * 1000);
  let month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";
  const year = current.getFullYear();
  let currentMonth = current.getMonth() + 1;
  let startDate = dateback.getDate();
  let startMonth = dateback.getMonth() + 1;
  let startYear = dateback.getFullYear();
  let endDate = current.getDate();
  if (currentMonth < 10) {
    currentMonth = "0" + currentMonth;
  }
  if (startMonth < 10) {
    startMonth = "0" + startMonth;
  }
  if (startDate < 10) {
    startDate = "0" + startDate;
  }
  if (endDate < 10) {
    endDate = "0" + endDate;
  }

  const start = `${startYear}-${startMonth}-${startDate}`;
  const end = `${year}-${currentMonth}-${endDate}`;
  const [checked, setChecked] = React.useState("all");
  const [tableData, setTableData] = React.useState([]);
  const [currentDate, setCurrentDate] = React.useState("");
  const [startDateRange, setStartDateRange] = React.useState(start);
  const [endDateRange, setEndDateRange] = React.useState(end);
  const [dateRange, setDateRange] = React.useState("daily");
  const [expenseValue, setExpenseValue] = React.useState([]);
  const [expenseTitle, setExpenseTitle] = React.useState([]);
  const [incomeTitle, setIncomeTitle] = React.useState([]);
  const [incomeValue, setIncomeValue] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const [isVisibleData, setVisibleData] = React.useState(false);

  const incomeData = {
    labels: incomeTitle,
    datasets: [
      {
        data: incomeValue,
      },
    ],
  };

  const expenseData = {
    labels: expenseTitle,
    datasets: [
      {
        data: expenseValue,
      },
    ],
  };

  useEffect(() => {
    showDateInButton();
    setLoader(true);
    getTableData();
    getIncomeChartData();
    getExpenseChartData();
    // checkData();
  }, []);

  const calendarRef = useRef();
  const filterRef = useRef();

  // get method for Expense Chart Data
  const getExpenseChartData = async () => {
    const phone_number_or_email = await AsyncStorage.getItem("@ph_number");
    const token = await AsyncStorage.getItem("@token");
    try {
      axios
        .get(
          `${root_url}api/dashboard?phonenumber_or_email=${phone_number_or_email}&from_date=${startDateRange}&to_date=${endDateRange}&date_type=${dateRange}&report_type=expense&detail=no&token=${token}`
        )
        .then((res) => {
          if (res.data.length === 0) {
            setVisibleData(true);
          } else {
            res.data.forEach((expenseData) => {
              expTitle.push(expenseData.Transaction_DateTime);
              expValue.push(expenseData.Transaction_Amount);
            });
            setExpenseTitle(expTitle);
            setExpenseValue(expValue);
            setLoader(false);
            setVisibleData(false);
          }
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      alert(error);
    }
  };

  // get method for income chart data
  const getIncomeChartData = async () => {
    const phone_number_or_email = await AsyncStorage.getItem("@ph_number");
    const token = await AsyncStorage.getItem("@token");
    try {
      axios
        .get(
          `${root_url}api/dashboard?phonenumber_or_email=${phone_number_or_email}&from_date=${startDateRange}&to_date=${endDateRange}&date_type=${dateRange}&report_type=income&detail=no&token=${token}`
        )
        .then((res) => {
          res.data.forEach((incomeData) => {
            incTitle.push(incomeData.Transaction_DateTime);
            incValue.push(incomeData.Transaction_Amount);
          });
          setIncomeTitle(incTitle);
          setIncomeValue(incValue);
          setLoader(false);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      alert(error);
    }
  };

  // get method for table data
  const getTableData = async () => {
    const phone_number_or_email = await AsyncStorage.getItem("@ph_number");
    const token = await AsyncStorage.getItem("@token");
    try {
      axios
        .get(
          `${root_url}api/dashboard?phonenumber_or_email=${phone_number_or_email}&from_date=${startDateRange}&to_date=${endDateRange}&date_type=${dateRange}&report_type=${checked}&detail=yes&token=${token}`
        )
        .then((res) => {
          setTableData(res.data);
          setLoader(false);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      alert(error);
    }
  };

  // show date in button
  const showDateInButton = () => {
    const last = new Date(current.getTime() - 7 * 24 * 60 * 60 * 1000);
    let date = `${month[last.getMonth()]} ${last.getDate()}-${
      month[current.getMonth()]
    } ${current.getDate()}, ${current.getFullYear()}`;
    setCurrentDate(date);
  };

  // date difference method
  const findDateDifference = (start, end) => {
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
      setDateRange("daily");
    } else if (differenceDay <= 30 || differenceDay <= 31) {
      setDateRange("weekly");
    } else if (differenceDay > 30 && differenceDay <= 365) {
      setDateRange("monthly");
    } else if (differenceDay > 365) {
      setDateRange("yearly");
    }
    setStartDateRange(start);
    setEndDateRange(end);
  };

  return (
    <SafeAreaView style={dashboard_style.container}>
      <View style={dashboard_style.header}>
        {/* logo */}
        <Image
          style={dashboard_style.logo}
          source={require("../../assets/images/logo.png")}
        />
        {/* intro text */}
        <Text style={dashboard_style.headerText}>
          "Hey! , here is your overall income and expense report"
        </Text>
      </View>
      {/* calendar dialog button */}
      <Button
        mode="contained"
        style={dashboard_style.dateBtn}
        labelStyle={{ color: "#fff" }}
        icon="calendar"
        onPress={() => calendarRef.current.open()}
      >
        <Text style={{ fontSize: 14 }}>{currentDate}</Text>
      </Button>

      {isVisibleData === true ? (
        <Text style={dashboard_style.noDataText}>
          No Data is Available from {currentDate}
        </Text>
      ) : (
        <ScrollView style={dashboard_style.dataContainer}>
          {/* income title */}
          <View
            style={{
              display:
                checked === "all" || checked === "income" ? "flex" : "none",
            }}
          >
            <Title style={dashboard_style.chartTitle}> Income Chart</Title>
            {loader === true ? (
              // loading image
              <Image
                source={require("../../assets/images/sayinkine.gif")}
                style={dashboard_style.loader}
              />
            ) : (
              // Income chart
              <BarChart
                style={dashboard_style.chart}
                data={incomeData}
                width={Dimensions.get("window").width}
                height={300}
                showValuesOnTopOfBars={true}
                // pastYearRange = {1}
                chartConfig={{
                  backgroundColor: "#ffffff",
                  backgroundGradientFrom: "#ffffff",
                  backgroundGradientTo: "#ffffff",
                  barPercentage: 0.4,
                  fillShadowGradient: `rgba(1, 122, 205, 1)`,
                  fillShadowGradientOpacity: 1,
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#000000",
                  },
                }}
                verticalLabelRotation={45}
              />
            )}
          </View>

          <View
            style={{
              display:
                checked === "all" || checked === "expense" ? "flex" : "none",
            }}
          >
            {/* expense title */}
            <Title style={dashboard_style.chartTitle}> Expense Chart</Title>
            {loader === true ? (
              // loading image
              <Image
                source={require("../../assets/images/sayinkine.gif")}
                style={dashboard_style.loader}
              />
            ) : (
              // expense chart
              <BarChart
                style={dashboard_style.chart}
                data={expenseData}
                width={Dimensions.get("window").width}
                height={300}
                showValuesOnTopOfBars={true}
                chartConfig={{
                  backgroundColor: "#ffffff",
                  backgroundGradientFrom: "#ffffff",
                  backgroundGradientTo: "#ffffff",
                  barPercentage: 0.4,
                  fillShadowGradient: "#c2b280",
                  fillShadowGradientOpacity: 1,
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726",
                  },
                }}
                verticalLabelRotation={45}
              />
            )}
          </View>

          {/* table to show data */}
          <DataTable style={dashboard_style.datatable}>
            <DataTable.Header>
              <DataTable.Title>No</DataTable.Title>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title numeric>Type</DataTable.Title>
              <DataTable.Title numeric>Title</DataTable.Title>
              <DataTable.Title numeric>Amount</DataTable.Title>
            </DataTable.Header>

            {loader === true ? (
              // loading image
              <Image
                source={require("../../assets/images/sayinkine.gif")}
                style={dashboard_style.loader}
              />
            ) : (
              // table data
              <View>
                {tableData.map((data) => {
                  return (
                    <DataTable.Row key={data.No}>
                      <DataTable.Cell>
                        {tableData.indexOf(data) + 1}
                      </DataTable.Cell>
                      <DataTable.Cell style={{ width: "100%" }}>
                        {data.Transaction_DateTime}
                      </DataTable.Cell>
                      <DataTable.Cell numeric>
                        {data.Transaction_Type}
                      </DataTable.Cell>
                      <DataTable.Cell numeric>{data.Category}</DataTable.Cell>
                      <DataTable.Cell numeric>
                        {data.Transaction_Amount}
                      </DataTable.Cell>
                    </DataTable.Row>
                  );
                })}
              </View>
            )}
          </DataTable>
        </ScrollView>
      )}
      <RBSheet
        ref={calendarRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={600}
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingBottom: 20,
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
          style={{ marginBottom: 200 }}
          onChange={({ startDate, endDate }) => {
            findDateDifference(startDate, endDate);
          }}
        />
        <FAB
          style={dashboard_style.fab}
          icon="check-underline"
          onPress={() => {
            getTableData();
            getIncomeChartData();
            getExpenseChartData();
            calendarRef.current.close();
          }}
        />
      </RBSheet>

      {/* filter dialog */}
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
            setLoader(true);
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

      {/* filter button */}
      <FAB
        style={dashboard_style.fab}
        icon="filter"
        onPress={() => filterRef.current.open()}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

// dashboard style
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
    marginTop: 30,
    width: "auto",
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
  loader: {
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  noDataText: {
    marginTop: "50%",
    alignSelf: "center",
    fontSize: 16,
    color: "#0d3858",
  },
});

// calendar dialog style
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
  calendar: {
    marginBottom: 200,
    paddingBottom: 200,
  },
});

// filter dialog style
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
