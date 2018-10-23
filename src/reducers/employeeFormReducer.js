import { EMPLOYEE_UPDATE, EMPLOYEE_CREATED } from "../actions/types";

const INITAL_STATE = {
  name: "",
  email: "",
  phone: "",
  shift: "Day"
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    case EMPLOYEE_CREATED:
      return INITAL_STATE;
    default:
      return state;
  }
};
