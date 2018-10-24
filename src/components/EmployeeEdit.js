import React, { Component } from "react";
import _ from "lodash";

import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
import { connect } from "react-redux";
import * as EmployeeAction from "../actions/EmployeeAction";
import EmployeeForm from "./EmployeeForm";
import Confirm from "./Confirm";

class EmployeeEdit extends Component {
  state = {
    showModal: false
  };

  UNSAFE_componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onSave = () => {
    const { name, email, phone, shift } = this.props;
    if (name != "" && email != "" && phone != "")
      this.props.employeeSave({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        shift,
        uid: this.props.employee.uid
      });
  };

  onAccept = () => {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
    this.setState({ showModal: false });
  };

  onDecline = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onSave}>SAVE</Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={() => {
              this.setState({ showModal: !this.state.showModal });
            }}
          >
            FIRE EMPLOYEE
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are Sure to delete this ?
        </Confirm>
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
  EmployeeAction
)(EmployeeEdit);
