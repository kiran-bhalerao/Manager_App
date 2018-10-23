import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import authReducers from "../reducers/authReducers";

export default createStore(
  combineReducers({
    auth: authReducers
  }),
  {},
  applyMiddleware(ReduxThunk)
);
