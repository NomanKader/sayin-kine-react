import React, { useEffect, useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  Card,
  IconButton,
  List,
  Button,
  RadioButton,
  TextInput,
} from "react-native-paper";
import {
  BottomAlert,
  useRefBottomAlert,
} from "react-native-modal-bottom-alert";
import { showBottomAlert } from "react-native-modal-bottom-alert";
import { Select, Option } from "react-native-chooser";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Speedometer from "react-native-speedometer-chart";
import RBSheet from "react-native-raw-bottom-sheet";
import Icon from "react-native-vector-icons/EvilIcons";

const Home = () => {
  const root_url = "https://sayinkineapi.nksoftwarehouse.com/";
  const [user_name, setUserName] = React.useState("");
  const [budgetAmount, setBudgetAmount] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [checked, setChecked] = React.useState("income");
  const [selected, setSelected] = React.useState("");
  const [categoryList, setCategoryList] = React.useState([]);

  const refRBSheet = useRef();
  useEffect(() => {
    getUserNameAndBudget();
    setLoading(true);
  }, []);

  const getUserNameAndBudget = async () => {
    const phone_number_or_email = await AsyncStorage.getItem("@ph_number");
    try {
      axios
        .get(
          `${root_url}api/home?phonenumber_or_email=${phone_number_or_email}`
        )
        .then((res) => {
          if (res.data !== 500) {
            res.data.forEach((element) => {
              setUserName(element.User_Name);
              setBudgetAmount(element.Budget);
              setLoading(false);
            });
          } else {
            showBottomAlert(
              "error",
              "Error",
              "Please check your internet connection!"
            );
          }
        })
        .catch((err) => console.log(err.message));
    } catch (error) {}
  };

  const getSelectData = async () => {
    const phone_number_or_email = await AsyncStorage.getItem("@ph_number");
    try {
      axios
        .get(
          `${root_url}api/Category?phonenumber_or_email=${phone_number_or_email}`
        )
        .then((res) => setCategoryList(res.data))
        .catch((err) => console.log(err));
    } catch (error) {}
  };

  console.log(selected);

  return (
    <SafeAreaView
      style={{ height: "100%", backgroundColor: "#fff", width: "100%" }}
    >
      <View style={home_style.header}>
        <Image
          style={home_style.logo}
          source={require("../../assets/images/logo.png")}
        />
        {loading === true ? (
          <Image
            source={require("../../assets/images/sayinkine.gif")}
            style={{ top: 40 }}
          />
        ) : (
          <Text style={home_style.headerText}>
            Good Morning, {"\n     "} <Text>{user_name}</Text>
          </Text>
        )}
      </View>
      <View style={home_style.body}>
        <Card style={home_style.card}>
          <Card.Content style={home_style.cardContent}>
            <Text style={home_style.cardText}>Budget Left</Text>
            {loading === true ? (
              <Image source={require("../../assets/images/sayinkine.gif")} />
            ) : (
              <Text style={home_style.budgetAmount}>{budgetAmount}</Text>
            )}
          </Card.Content>
        </Card>
        <Text style={home_style.chartHeader}>Jun 2021</Text>
        <Card.Content style={home_style.chartContainer}>
          <Speedometer
            value={35}
            totalValue={100}
            size={150}
            outerColor="#d3d3d3"
            internalColor="#006994"
            showText
            text="Income"
            textStyle={{ color: "#006994", fontWeight: "bold" }}
            showLabels
            labelStyle={{ color: "blue" }}
            labelFormatter={(number) => `${number}%`}
            showPercent
            percentStyle={{ color: "#0d3858" }}
            style={home_style.chart}
          />
          <Speedometer
            value={50}
            totalValue={100}
            size={150}
            outerColor="#d3d3d3"
            internalColor="#c2b280"
            showText
            text="Expense"
            textStyle={{ color: "#c2b280", fontWeight: "bold" }}
            showLabels
            labelStyle={{ color: "blue" }}
            labelFormatter={(number) => `${number}%`}
            showPercent
            percentStyle={{ color: "#0d3858" }}
            style={home_style.chart}
          />
        </Card.Content>
        <IconButton
          icon="plus-circle-outline"
          color="#fff"
          size={30}
          onPress={() => {
            refRBSheet.current.open();
            getSelectData();
          }}
          style={home_style.addMore}
        />
        <Text style={home_style.today_text}>Today</Text>
        <ScrollView
          style={home_style.scrollContainer}
          persistentScrollbar={true}
          indicatorStyle="white"
        >
          <Card.Content>
            <List.Section>
              <List.Item
                style={home_style.listItem}
                titleStyle={{ color: "#fff" }}
                title="Food"
                descriptionStyle={{ color: "#fff" }}
                description="Expense"
                left={(props) => (
                  <List.Icon {...props} icon="food" color="#fff" />
                )}
                right={(props) => (
                  <List.Subheader style={home_style.listExpense}>
                    {" "}
                    - 1900 <Text style={{ color: "#fff" }}>mmk</Text>
                  </List.Subheader>
                )}
              />
              <List.Item
                style={home_style.listItem}
                titleStyle={{ color: "#fff" }}
                title="Work"
                descriptionStyle={{ color: "#fff" }}
                description="Income"
                left={(props) => (
                  <List.Icon {...props} icon="food" color="#fff" />
                )}
                right={(props) => (
                  <List.Subheader style={home_style.listIncome}>
                    {" "}
                    + 15000 <Text style={{ color: "#fff" }}>mmk</Text>
                  </List.Subheader>
                )}
              />

              <List.Item
                style={home_style.listItem}
                titleStyle={{ color: "#fff" }}
                title="Food"
                descriptionStyle={{ color: "#fff" }}
                description="Expense"
                left={(props) => (
                  <List.Icon {...props} icon="food" color="#fff" />
                )}
                right={(props) => (
                  <List.Subheader style={home_style.listExpense}>
                    {" "}
                    - 1900 <Text style={{ color: "#fff" }}>mmk</Text>
                  </List.Subheader>
                )}
              />
              <List.Item
                style={home_style.listItem}
                titleStyle={{ color: "#fff" }}
                title="Food"
                descriptionStyle={{ color: "#fff" }}
                description="Expense"
                left={(props) => (
                  <List.Icon {...props} icon="food" color="#fff" />
                )}
                right={(props) => (
                  <List.Subheader style={home_style.listExpense}>
                    {" "}
                    - 1900 <Text style={{ color: "#fff" }}>mmk</Text>
                  </List.Subheader>
                )}
              />
              <List.Item
                style={home_style.listItem}
                titleStyle={{ color: "#fff" }}
                title="Food"
                descriptionStyle={{ color: "#fff" }}
                description="Expense"
                left={(props) => (
                  <List.Icon {...props} icon="food" color="#fff" />
                )}
                right={(props) => (
                  <List.Subheader style={home_style.listExpense}>
                    {" "}
                    - 1900 <Text style={{ color: "#fff" }}>mmk</Text>
                  </List.Subheader>
                )}
              />
              <List.Item
                style={home_style.listItem}
                titleStyle={{ color: "#fff" }}
                title="Food"
                descriptionStyle={{ color: "#fff" }}
                description="Expense"
                left={(props) => (
                  <List.Icon {...props} icon="food" color="#fff" />
                )}
                right={(props) => (
                  <List.Subheader style={home_style.listExpense}>
                    {" "}
                    - 1900 <Text style={{ color: "#fff" }}>mmk</Text>
                  </List.Subheader>
                )}
              />
            </List.Section>
          </Card.Content>
        </ScrollView>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={350}
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
            style={home_style.close_tbn}
            onPress={() => refRBSheet.current.close()}
          />
        </TouchableOpacity>
        <View>
          <View style={dialog_style.radioContainer}>
            <RadioButton
              value="income"
              status={checked === "income" ? "checked" : "unchecked"}
              onPress={() => setChecked("income")}
              color="#0d3858"
            />
            <Text style={{ marginRight: 20 }}>Income</Text>
            <RadioButton
              value="expense"
              status={checked === "expense" ? "checked" : "unchecked"}
              onPress={() => setChecked("expense")}
              color="#0d3858"
            />
            <Text>Expense</Text>
          </View>
          <View style={dialog_style.inputFields}>
            <TextInput
              mode="outlined"
              style={dialog_style.input}
              theme={{ colors: { primary: "#0D3858" }, roundness: 10 }}
              label="Income Amount"
              keyboardType="numeric"
              outlineColor="#0D3858"
              //   name="budgetData"
              //   value={budgetData}
              //   onChangeText={(budgetData) => setBudgetData(budgetData)}
              //   error={numberCheckErr && budgetData == ""}
            />
            <Select
              defaultText="Choose Category"
              style={dialog_style.selectionInput}
              textStyle={{ marginTop: 8 }}
              backdropStyle={{ backgroundColor: "#0d3858" }}
              optionListStyle={{
                backgroundColor: "#F5FCFF",
                borderRadius: 20,
                height: 300,
                padding: 20,
              }}
              indicator="down"
              indicatorColor="#0d3858"
              indicatorStyle={{ marginTop: 8 }}
            >
              {categoryList.map((category) => {
                return (
                  <Option key={category.No}>
                    <Text >{category.Category_Title}</Text>
                    {"   "}
                    <Text >{category.Category_Sticker}</Text>
                  </Option>
                );
              })}
            </Select>
          </View>
          <Button
            mode="contained"
            style={dialog_style.saveBtn}
            onPress={() => console.log(selected)}
          >
            Save
          </Button>
        </View>
      </RBSheet>
      <BottomAlert ref={(ref) => useRefBottomAlert(ref)} />
    </SafeAreaView>
  );
};

export default Home;

const home_style = StyleSheet.create({
  header: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  logo: {
    top: 10,
    width: 88,
    height: 123,
  },
  headerText: {
    fontSize: 24,
    marginTop: 30,
    color: "#0d3858",
    fontStyle: "italic",
  },
  body: {
    backgroundColor: "#0d3858",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  card: {
    backgroundColor: "#124d78",
    width: 317,
    height: 100,
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#5397c8",
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 20,
    color: "#fff",
    paddingBottom: 10,
  },
  budgetAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  chartHeader: {
    top: 20,
    left: 20,
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#fff",
  },
  chartContainer: {
    marginTop: 30,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  chart: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 15,
  },
  addMore: {
    alignSelf: "center",
    top: 20,
    color: "#fff",
  },
  today_text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    right: 20,
    fontStyle: "italic",
    alignSelf: "flex-end",
  },
  listItem: {
    backgroundColor: "#124d78",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#5397c8",
  },
  listExpense: {
    color: "#ff7070",
  },
  listIncome: {
    color: "#36c46f",
  },
  scrollContainer: {
    marginBottom: 120,
  },
  close_tbn: {
    left: 20,
  },
});

const dialog_style = StyleSheet.create({
  radioContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  inputFields: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 320,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderColor: "#0D3858",
  },
  selectionInput: {
    borderWidth: 1,
    borderColor: "#0D3858",
    width: 320,
    borderRadius: 10,
    height: 55,
  },
  saveBtn: {
    marginTop: 50,
    width: 200,
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "#0d3858",
  },
});
