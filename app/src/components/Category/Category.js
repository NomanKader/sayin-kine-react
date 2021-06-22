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
import { Button, Card, TextInput, Provider, Title } from "react-native-paper";

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
    emoji: "💑🏻",
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

const Category = () => {
  const [category, setCategory] = React.useState("");
  const [sticker, setSticker] = React.useState("");

  return (
    <Provider>
      <SafeAreaView
        style={{ backgroundColor: "#fff", height: "100%", width: "100%" }}
      >
        <View style={category_style.header}>
          <Image
            style={category_style.logo}
            source={require("../../assets/images/logo.png")}
          />
          <Text style={category_style.headerText}>
            "Hey, let's create {"\n"} category & choose icon to use in your
            income and expense."
          </Text>
        </View>
        <TextInput
          mode="outlined"
          theme={{ colors: { primary: "#0D3858" }, roundness: 15 }}
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
          labelStyle={{ fontSize: 16, paddingTop: 7 }}
          style={category_style.createBtn}
          uppercase={false}
        >
          Let's Create
        </Button>
      </SafeAreaView>
    </Provider>
  );
};

export default Category;

const category_style = StyleSheet.create({
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
  input: {
    top: 80,
    marginBottom: 20,
    borderRadius: 20,
    width: 320,
    alignSelf: "center",
  },
  inputExp: {
    top: 60,
    alignSelf: "flex-start",
    left: 55,
    color: "#0d3858",
    fontWeight: "bold",
  },
  stickerCard: {
    alignSelf: "center",
    top: 80,
    width: "50%",
  },
  addSticker: {
    alignSelf: "center",
  },
  chooseStickerTxt: {
    alignSelf: "center",
  },
  displayTxt: {
    top: 100,
    left: 60,
    fontSize: 16,
    fontWeight: "bold",
    color: "#0d3858",
  },
  displayInnterTxt: {
    color: "#000",
  },
  createBtn: {
    backgroundColor: "#467ca4",
    borderRadius: 20,
    height: 55,
    width: 150,
    top: 120,
    alignSelf: "center",
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
    height: 90,
    backgroundColor: "#0d3858",
    borderRadius: 15,
  },
  iconsCard: {
    margin: (0, 8, 8, 8),
  },
  icons: {
    padding: 5,
    alignSelf: "center",
    fontSize: 20,
  },
});
