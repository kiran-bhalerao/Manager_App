import { EMPLOYEE_UPDATE, EMPLOYEE_CREATED, EMPLOYEE_FETCHED } from "./types";
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import { Actions } from "react-native-router-flux";

// Normal Action Creator, return an action object
// with specific type and some payload data.

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

// Use of redux-thunk lib -
// An actionCreator which return a function having dispatch arg.

export const employeeCreate = ({ name, email, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, email, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATED });
        Actions.employeeList();
      });
  };
};

export const employeeFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on("value", snapshot => {
        dispatch({
          type: EMPLOYEE_FETCHED,
          payload: snapshot.val()
        });
      });
  };
};
