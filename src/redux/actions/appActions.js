import { ActionTypes } from "../constants/action-types";

export const userSignup = (user) => {
  return {
    type: ActionTypes.USER_SIGNUP,
    payload: user,
  };
};

export const userLogin = (user) => {
  return {
    type: ActionTypes.USER_LOGIN,
    payload: user,
  };
};

export const userLogout = () => {
  return {
    type: ActionTypes.USER_LOGOUT,
    payload: {},
  };
};
