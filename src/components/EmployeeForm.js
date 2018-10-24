import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import * as Actions from "../actions/EmployeeAction";
import CardSection from "./CardSection";
import Input from "./Input";
import ShiftPicker from "./ShiftPicker";

class EmployeeForm extends Component {
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

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="User"
            onChangeText={this.nameChanged}
            value={this.props.name}
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
      </View>
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
)(EmployeeForm);
