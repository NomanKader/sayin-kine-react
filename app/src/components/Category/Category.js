import React from "react";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  TextInput,
  Provider
} from "react-native-paper";
import IonIcons from "react-native-vector-icons/AntDesign";

const Category = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

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
          "Hey, let's create {"\n"} category & choose icon to use in your income
          and expense."
        </Text>
      </View>
      <TextInput
        mode="outlined"
        theme={{ colors: { primary: "#0D3858" }, roundness: 15 }}
        label="Enter category title"
        style={category_style.input}
      />
      <Text style={category_style.inputExp}>eg: food, drink, etc...</Text>
      <View style={category_style.stickerCard}>
        <TouchableOpacity>
          <IonIcons
            name="pluscircleo"
            size={30}
            style={category_style.addSticker}
            onPress={showDialog}
          />
        <Text style={category_style.chooseStickerTxt}> Choose Sticker</Text>
        </TouchableOpacity>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Choose Sticker</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
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
  createBtn: {
    backgroundColor: "#467ca4",
    borderRadius: 20,
    height: 55,
    width: 150,
    top: 120,
    alignSelf: "center",
  },
});
