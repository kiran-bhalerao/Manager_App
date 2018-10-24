import { EMPLOYEE_UPDATE, EMPLOYEE_CREATED, EMPLOYEE_FETCHED , EMPLOYEE_INIT} from "./types";
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

// This is watcher - every time data get change or updated this will call
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

export const employeeSave = ({ name, email, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, email, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATED });
        Actions.employeeList();
      });
  };
};


export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: EMPLOYEE_INIT });
        Actions.employeeList();
      });
  };
};