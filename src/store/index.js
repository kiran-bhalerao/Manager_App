import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import authReducers from "../reducers/authReducers";
import employeeFormReducer from "../reducers/employeeFormReducer";
import employeeReducer from "../reducers/employeeReducer";

export default createStore(
  combineReducers({
    auth: authReducers,
    employeeFrom: employeeFormReducer,
    employees: employeeReducer
  }),
  {},
  applyMiddleware(ReduxThunk)
);
