import React from "react";
import { View, Text } from "react-native";

const Header = props => (
  <View style={styles.containerStyle}>
    <Text style={styles.textStyle}>{props.title.toUpperCase()}</Text>
  </View>
);

const styles = {
  containerStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2
  },
  textStyle: {
    color: "#000",
    fontSize: 22
  }
};

export default Header;
