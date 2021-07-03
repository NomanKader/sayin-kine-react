import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, RadioButton, TextInput } from "react-native-paper";
import { Select, Option } from "react-native-chooser";

const InputContainer = () => {
  const [checked, setChecked] = React.useState("income");
  //   const [numberCheckErr, setnumberCheckErr] = useState(false);

  const [selected, setSelected] = React.useState("Choose Category");

  return (
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
          defaultText={selected}
          style={dialog_style.selectionInput}
          textStyle={{marginTop: 8}}
          backdropStyle={{ backgroundColor: "#0d3858" }}
          optionListStyle={{
            backgroundColor: "#F5FCFF",
            borderRadius: 20,
            height: 300,
            padding: 20,
          }}
          indicator="down"
          indicatorColor="#0d3858"
          indicatorStyle={{marginTop: 8}}
        >
          <Option value="azhar">Azhar</Option>
          <Option value="johnceena">Johnceena</Option>
          <Option value="undertaker">Undertaker</Option>
          <Option value="Daniel">Daniel</Option>
          <Option value="Roman">Roman</Option>
          <Option value="Stonecold">Stonecold</Option>
          <Option value="Rock">Rock</Option>
          <Option value="Sheild">Sheild</Option>
          <Option value="Orton">Orton</Option>
        </Select>
      </View>
      <Button mode="contained" style={dialog_style.saveBtn}>Save</Button>
    </View>
  );
};

export default InputContainer;

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
    height: 55
  },
  saveBtn:{
      marginTop: 50,
      width: 200,
      alignSelf: "center",
      borderRadius: 10,
      backgroundColor: '#0d3858'
  }
});
