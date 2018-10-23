import { EMPLOYEE_FETCHED } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCHED:
      return action.payload;
    default:
      return state;
  }
};
