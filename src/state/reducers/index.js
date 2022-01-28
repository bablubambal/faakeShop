import { combineReducers } from "redux";
import loginReducers from "./loginReducers";

const reducers = combineReducers({
    login:loginReducers
})

export default reducers;