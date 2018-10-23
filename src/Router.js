import React from "react";
import { Scene, Router, Stack } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";

const RouterComponent = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={LoginForm} title="Login Here" />
    </Stack>
  </Router>
);

export default RouterComponent;
