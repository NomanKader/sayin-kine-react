import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Card, List } from "react-native-paper";
import IonIcons from "react-native-vector-icons/AntDesign";
import Speedometer from "react-native-speedometer-chart";
const Home = () => {
  return (
    <SafeAreaView
      style={{ height: "100%", backgroundColor: "#fff", width: "100%" }}
    >
      <View style={home_style.header}>
        <Image
          style={home_style.logo}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={home_style.headerText}>
          Good Morning, {"\n     "} <Text>Tin Win Hlaing</Text>
        </Text>
      </View>
      <View style={home_style.body}>
        <Card style={home_style.card}>
          <Card.Content style={home_style.cardContent}>
            <Text style={home_style.cardText}>Budget Left</Text>
            <Text style={home_style.budgetAmount}>1,000,000 MMK</Text>
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
        <TouchableOpacity>
          <IonIcons name="pluscircleo" style={home_style.addMore} size={30} />
        </TouchableOpacity>
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
    borderColor: '#5397c8'
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
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#5397c8'
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
});

// #5397c8 border color
// #124d78 background color
// #ff7070 expense
// #36c46f income
