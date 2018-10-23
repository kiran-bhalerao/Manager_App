import React from "react";
import { Text, View, Picker } from "react-native";

const ShiftPicker = ({ onValueChange, value }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.textStyle}>Shift</Text>
    <Picker
      style={styles.pickerStyle}
      onValueChange={onValueChange}
      selectedValue={value}
    >
      <Picker.Item label="Day" value="Day" />
      <Picker.Item label="Night" value="Night" />
    </Picker>
  </View>
);
const styles = {
  pickerStyle: {
    height: 40,
    marginLeft: 20,
    paddingLeft: 10,
    flex: 8
  },
  textStyle: {
    marginLeft: 10,
    fontSize: 18,
    flex: 3
  },
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between"
  }
};

export default ShiftPicker;
