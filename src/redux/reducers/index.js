import { combineReducers } from "redux";
import { userLoginReducer, userSignupReducer } from "./appReducer";

const reducers = combineReducers({
  signupData: userSignupReducer,
  loginData: userLoginReducer,
});

export default reducers;
