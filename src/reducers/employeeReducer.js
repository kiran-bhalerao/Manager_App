import { EMPLOYEE_UPDATE } from "../actions/types";

const INITAL_STATE = {
  name: "",
  email: "",
  phone: "",
  shift: ""
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    default:
      return state;
  }
};
