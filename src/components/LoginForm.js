import React, { Component } from "react";
import { View, Text } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
import Input from "./Input";
import Spinner from "./Spinner";
import { connect } from "react-redux";
import * as actions from "../actions";

class LoginForm extends Component {
  onLoginPress = () => {
    // use of react-thunk lib
    this.props.loginUser(this.props.email.trim(), this.props.password.trim());
  };
  emailChanged = email => {
    // call action creator, it will automatically dispatch to reducers cause
    // .. we register our action to connect.
    this.props.emailChanged(email.trim());
  };
  passwordChanged = password => {
    this.props.passwordChanged(password.trim());
  };

  renderError = () => {
    if (this.props.error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{this.props.error}</Text>
        </View>
      );
    }
  };

  renderButton = () => {
    if (this.props.loading) return <Spinner />;
    return <Button onPress={this.onLoginPress}>Login</Button>;
  };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            onChangeText={this.emailChanged}
            value={this.props.email}
            secureTextEntry={false}
            autoFocus={true}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="*****"
            onChangeText={this.passwordChanged}
            value={this.props.password}
            secureTextEntry={true}
            autoFocus={false}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const mapStatToProps = state => {
  return {
    ...state.auth
  };
};

const styles = {
  errorContainer: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  errorText: {
    fontSize: 20,
    color: "red"
  }
};

export default connect(
  mapStatToProps,
  actions
)(LoginForm);
