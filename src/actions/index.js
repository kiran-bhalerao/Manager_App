// import {
//   EMAIL_CHANGED,
//   PASSWORD_CHANGED,
//   LOGIN_USER_SUCCESS,
//   LOGIN_USER_FAIL,
//   LOGIN_USER
// } from "./types";

// import firebase from "@firebase/app";
// import "@firebase/auth";
// import { Actions } from "react-native-router-flux";

// export const emailChanged = email => ({
//   type: EMAIL_CHANGED,
//   payload: email
// });

// export const passwordChanged = password => ({
//   type: PASSWORD_CHANGED,
//   payload: password
// });

// export const loginUser = (email, password) => {
//   return dispatch => {
//     dispatch({ type: LOGIN_USER });
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(user => {
//         dispatch({
//           type: LOGIN_USER_SUCCESS,
//           payload: user
//         });
//         Actions.employeeList();
//       })
//       .catch(() => {
//         firebase
//           .auth()
//           .createUserWithEmailAndPassword(email, password)
//           .then(user => {
//             dispatch({
//               type: LOGIN_USER_SUCCESS,
//               payload: user
//             });
//             Actions.employeeList();
//           })
//           .catch(() => {
//             dispatch({ type: LOGIN_USER_FAIL });
//           });
//       });
//   };
// };
