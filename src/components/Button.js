import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
    <Text style={styles.textStyle}>{props.children}</Text>
  </TouchableOpacity>
);

const styles = {
  buttonStyle: {
    backgroundColor: "#fff",
    flex: 1,
    alignSelf: "stretch",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "purple",
    margin: 5
  },
  textStyle: {
    alignSelf: "center",
    fontWeight: "200",
    fontSize: 16,
    color: "purple",
    paddingTop: 10,
    paddingBottom: 10
  }
};
export default Button;
