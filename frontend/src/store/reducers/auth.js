import { AUTH_LOGIN, AUTH_PROFILE, AUTH_SIGNUP } from "./../types";
const initialState = {
  user: "",
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGNUP:
      return {
        ...state,
        custom: action.payload,
      };
    case AUTH_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case AUTH_PROFILE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
