import React, { Component } from "react";
import { View, Text, Modal } from "react-native";
import CardSection from "./CardSection";
import Button from "./Button";

const Confirm = ({ children, onAccept, onDecline, visible }) => (
  <Modal
    visible={visible}
    transparent={true}
    animationType="slide"
    onRequestClose={() => {}}
  >
    <View style={styles.containerStyle}>
      <CardSection style={styles.cardSectionStyle}>
        <Text style={styles.textStyle}>{children}</Text>
        <Button onPress={onAccept}>Yes</Button>
        <Button onPress={onDecline}>No</Button>
      </CardSection>
    </View>
  </Modal>
);

const styles = {
  cardSectionStyle: {
    height: "34%",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40,
    marginBottom: 10
  },
  containerStyle: {
    backgroundColor: "rgba(0,0,0,0.7)",
    position: "relative",
    flex: 1,
    justifyContent: "center"
  }
};

export default Confirm;
