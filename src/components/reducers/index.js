import { combineReducers } from "redux";
import Educations from "../Educations";
import Experience from "../Experience";

// All values are defined here for state change
export default combineReducers({
    
 obj : Objective,
 edu : Educations,
 Exp : Experience
});
