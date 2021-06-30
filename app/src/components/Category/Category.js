import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Button,
  Card,
  TextInput,
  Title,
  List,
  Avatar,
} from "react-native-paper";
import {
  BottomAlert,
  useRefBottomAlert,
} from "react-native-modal-bottom-alert";
import { showBottomAlert } from "react-native-modal-bottom-alert";
import { useEffect } from "react";
// import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";

const topics = [
  {
    id: 1,
    emoji: "🍔",
    text: "Food",
  },
  {
    id: 2,
    emoji: "🍹",
    text: "Drink",
  },
  {
    id: 3,
    emoji: "💼",
    text: "Work",
  },
  {
    id: 4,
    emoji: "☕",
    text: "Coffee",
  },
  {
    id: 5,
    emoji: "🏥",
    text: "Health",
  },
  {
    id: 6,
    emoji: "🏠",
    text: "Home",
  },
  {
    id: 7,
    emoji: "🚗",
    text: "Car",
  },
  {
    id: 8,
    emoji: "🚌",
    text: "Bus",
  },
  {
    id: 9,
    emoji: "🏪",
    text: "Market",
  },
  {
    id: 10,
    emoji: "🏫",
    text: "School",
  },
  {
    id: 11,
    emoji: "🥳",
    text: "Wedding",
  },
  {
    id: 12,
    emoji: "👶🏻",
    text: "Baby",
  },
  {
    id: 13,
    emoji: "🏦",
    text: "Bank",
  },
  {
    id: 14,
    emoji: "👢",
    text: "Shoes(man)",
  },
  {
    id: 15,
    emoji: "👡",
    text: "Shoes(lady)",
  },
  {
    id: 16,
    emoji: "👔",
    text: "Clothes(man)",
  },
  {
    id: 17,
    emoji: "🧥",
    text: "Clothes(lady)",
  },
  {
    id: 18,
    emoji: "🌿",
    text: "Plants",
  },
  {
    id: 19,
    emoji: "🐶",
    text: "Animal(dog)",
  },
  {
    id: 20,
    emoji: "🐱",
    text: "Animal(cat)",
  },
];

const root_url = "https://sayinkineapi.nksoftwarehouse.com/";

// const categoryArray = [];

const Category = () => {
  const [category, setCategory] = React.useState("");
  const [sticker, setSticker] = React.useState("");
  const [categoryData, setCategoryData] = React.useState([]);
  const categoryList = categoryData.reverse();

  useEffect(() => {
    getCategory();
    // deleteCategoryData();
  }, []);

  const sendCategory = async (e) => {
    e.preventDefault();
    const checkNumber = await AsyncStorage.getItem("@ph_number");
    const categoryData = {
      Phone_Number_Or_Email: checkNumber,
      Category_Title: category,
      Category_Sticker: sticker,
    };
    try {
      if (category != "" && sticker != "") {
        axios
          .post(`${root_url}api/category`, categoryData)
          .then((res) => {
            if (res.data == "202") {
              showBottomAlert("success", "Congratulation!", "Category Created");
              getCategory();
              setCategory("");
              setSticker("");
            } else if (res.data == "409") {
              showBottomAlert("info", "Warning!", "Category already exists");
            } else if (res.data == "500") {
              showBottomAlert(
                "error",
                "Error",
                "Please check your internet connection!"
              );
            }
          })
          .catch((err) => console.log(err));
      } else if (
        (category != "" && sticker == "") ||
        (category == "" && sticker != "")
      ) {
        showBottomAlert(
          "info",
          "Warning!",
          "Please check your input or choose a sticker!"
        );
      } else {
        showBottomAlert(
          "info",
          "Warning!",
          "Please fill all fields correctly!"
        );
      }
    } catch (error) {
      alert(error);
    }
  };

  const getCategory = async () => {
    const checkNumber = await AsyncStorage.getItem("@ph_number");
    try {
      axios
        .get(`${root_url}api/Category?phonenumber_or_email=${checkNumber}`)
        .then((res) => setCategoryData(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      alert(error);
    }
  };

  const deleteCategoryData = (id) => {
    axios
      .delete(`${root_url}api/Category?id=${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data == "200") {
          getCategory();
        }
        if (res.data == "500") {
          showBottomAlert("error", "Error", "System Error");
        }
      })
      .catch((err) => console.log(err.message));
  };

  console.log(categoryData);

  return (
    <SafeAreaView
      style={{ backgroundColor: "#fff", height: "100%", width: "100%" }}
    >
      <View style={category_style.header}>
        <Image
          style={category_style.logo}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={category_style.headerText}>
          "Hey, let's create {"\n"} category & choose sticker to use in your
          income and expense."
        </Text>
      </View>
      <View style={category_style.categoryContainer}>
        <TextInput
          mode="outlined"
          theme={{
            colors: { primary: "#fff", placeholder: "#fff", text: "#fff" },
            roundness: 15,
          }}
          outlineColor="#fff"
          label="Enter category title"
          style={category_style.input}
          name="category"
          value={category}
          onChangeText={(category) => setCategory(category)}
        />
        <Text style={category_style.inputExp}>eg: food, drink, etc...</Text>
        <View style={category_style.stickerCard}>
          <View style={carousel_style.root}>
            <Card style={carousel_style.cardStyle}>
              <Title style={carousel_style.title}>Choose Sticker</Title>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {topics.map((category) => {
                  return (
                    <TouchableOpacity
                      key={category.id}
                      onPress={() => setSticker(category.emoji)}
                    >
                      <Card style={carousel_style.iconsCard}>
                        <Text style={carousel_style.icons}>
                          {category.emoji}
                        </Text>
                      </Card>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </Card>
          </View>
        </View>
        <Text style={category_style.displayTxt}>
          Your Categoy: {"  "}
          <Text style={category_style.displayInnterTxt}>
            {category} {sticker}
          </Text>
        </Text>
        <Button
          mode="contained"
          labelStyle={{ fontSize: 15 }}
          style={category_style.createBtn}
          uppercase={false}
          onPress={sendCategory}
        >
          Let's Create
        </Button>
        <ScrollView
          style={category_style.scrollContainer}
          persistentScrollbar={true}
          indicatorStyle="white"
        >
          {categoryList.map((categorylist) => {
            return (
              <Card.Content key={categorylist.No}>
                <List.Section>
                  <List.Item
                    style={category_style.listItem}
                    titleStyle={{ color: "#fff" }}
                    title={categorylist.Category_Title}
                    left={(props) => (
                      <List.Subheader
                        style={{ color: "rgba(0,0,0,0.87)", fontSize: 20 }}
                      >
                        {categorylist.Category_Sticker}
                      </List.Subheader>
                    )}
                    right={(props) => (
                      <TouchableOpacity
                        onPress={() => deleteCategoryData(categorylist.No)}
                        style={{ alignSelf: "center" }}
                      >
                        <List.Icon
                          {...props}
                          icon="trash-can-outline"
                          color="#CD6155"
                        />
                      </TouchableOpacity>
                    )}
                  />
                </List.Section>
              </Card.Content>
            );
          })}
        </ScrollView>
        <BottomAlert ref={(ref) => useRefBottomAlert(ref)} />
      </View>
    </SafeAreaView>
  );
};

export default Category;

const category_style = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  logo: {
    top: 10,
    left: 20,
    width: 88,
    height: 123,
  },
  headerText: {
    width: 250,
    fontSize: 16,
    textAlign: "center",
    color: "#0d3858",
    fontWeight: "bold",
  },
  categoryContainer: {
    backgroundColor: "#0d3858",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    top: 50,
    marginBottom: 30,
    width: 320,
    alignSelf: "center",
    backgroundColor: "#124d78",
    color: "#fff",
  },
  inputExp: {
    top: 30,
    alignSelf: "flex-start",
    left: 55,
    color: "#fff",
    fontWeight: "bold",
  },
  stickerCard: {
    alignSelf: "center",
    top: 40,
    width: "50%",
  },
  addSticker: {
    alignSelf: "center",
  },
  chooseStickerTxt: {
    alignSelf: "center",
  },
  displayTxt: {
    top: 50,
    left: 60,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  displayInnterTxt: {
    color: "#fff",
  },
  createBtn: {
    backgroundColor: "#467ca4",
    borderRadius: 10,
    width: 150,
    top: 65,
    alignSelf: "center",
  },
  listItem: {
    backgroundColor: "#124d78",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#5397c8",
    // backgroundColor: '#fff'
  },
  listExpense: {
    color: "#ff7070",
  },
  listIncome: {
    color: "#36c46f",
  },
  scrollContainer: {
    marginTop: 80,
    marginBottom: 150,
  },
});

const carousel_style = StyleSheet.create({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 13,
    textAlign: "center",
    marginBottom: 0,
    color: "#fff",
    fontWeight: "bold",
  },
  cardStyle: {
    width: 320,
    height: 93,
    backgroundColor: "#124d78",
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#5397c8",
  },
  iconsCard: {
    margin: (0, 7, 7, 7),
    borderRadius: 10,
  },
  icons: {
    padding: 5,
    alignSelf: "center",
    fontSize: 20,
  },
});
