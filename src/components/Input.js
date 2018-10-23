import React from "react";
import { TextInput, Text, View } from "react-native";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  autoFocus
}) => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{label}</Text>
    <TextInput
      style={styles.textInputStyle}
      editable={true}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
      autoFocus={autoFocus}
    />
  </View>
);

const styles = {
  textInputStyle: {
    height: 40,
    marginLeft: 20,
    fontSize: 16,
    paddingLeft: 10,
    flex: 8
  },
  labelStyle: {
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
export default Input;
