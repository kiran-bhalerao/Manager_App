import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Input from "./Input";
import Button from "./Button";
import ShiftPicker from "./ShiftPicker";
import { connect } from "react-redux";
import * as Actions from "../actions/EmployeeAction";

class EmployeeCreate extends Component {
  nameChanged = name => {
    this.props.employeeUpdate({ prop: "name", value: name });
  };
  emailChanged = email => {
    this.props.employeeUpdate({ prop: "email", value: email });
  };
  phoneChanged = phone => {
    this.props.employeeUpdate({ prop: "phone", value: phone });
  };

  shiftChanged = shift => {
    this.props.employeeUpdate({ prop: "shift", value: shift });
  };

  onSave = () => {
    // alert(this.props.name + " " + this.props.shift);
    const { name, email, phone, shift } = this.props;
    this.props.employeeCreate({ name, email, phone, shift });
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="User"
            onChangeText={this.nameChanged}
            value={this.props.name}
            autoFocus={true}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            onChangeText={this.emailChanged}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="222-222-2222"
            onChangeText={this.phoneChanged}
            value={this.props.phone}
          />
        </CardSection>
        <CardSection>
          <ShiftPicker
            onValueChange={this.shiftChanged}
            value={this.props.shift}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onSave}>SAVE</Button>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state.employeeFrom
  };
};

export default connect(
  mapStateToProps,
  Actions
)(EmployeeCreate);
