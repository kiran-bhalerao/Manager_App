import React from "react";
import { View } from "react-native";

const Card = props => (
  <View style={styles.containerStyle}>{props.children}</View>
);

const styles = {
  containerStyle: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    borderRadius: 2,
    elevation: 1,
    borderBottomWidth: 0,
    marginTop: 15,
    marginRight: 5,
    marginLeft: 5
  }
};
export default Card;
