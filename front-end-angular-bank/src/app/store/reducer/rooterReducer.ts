import userReducer from './userReducer';
import { combineReducers } from "redux";

const rooterReducer = combineReducers({
    user: userReducer
});
console.log(rooterReducer);
export default rooterReducer;

