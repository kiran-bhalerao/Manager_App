import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import authReducers from "../reducers/authReducers";
import employeeReducer from "../reducers/employeeReducer";

export default createStore(
  combineReducers({
    auth: authReducers,
    employee: employeeReducer
  }),
  {},
  applyMiddleware(ReduxThunk)
);
