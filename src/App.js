import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import firebase from "@firebase/app";
import "@firebase/auth";

import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Router from './Router'

class App extends Component {
  componentWillMount() {
    // Initialize Firebase_
    var config = {
      apiKey: "AIzaSyAOvQkr83WCc4XUmV8Cccf2sGMbjghExC4",
      authDomain: "auth-1eba9.firebaseapp.com",
      databaseURL: "https://auth-1eba9.firebaseio.com",
      projectId: "auth-1eba9",
      storageBucket: "auth-1eba9.appspot.com",
      messagingSenderId: "8794927604"
    };
    firebase.initializeApp(config);
  }

  // <Header title="Manager" />
  // <LoginForm />

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;
