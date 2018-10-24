import React, { Component } from "react";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
import { connect } from "react-redux";
import * as Actions from "../actions/EmployeeAction";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {
  onSave = () => {
    const { name, email, phone, shift } = this.props;
    if (name != "" && email != "" && phone != "")
      this.props.employeeCreate({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        shift
      });
  };

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onSave}>CREATE</Button>
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
