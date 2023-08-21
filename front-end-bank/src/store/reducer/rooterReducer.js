import userReducer from './userReducer';
import { combineReducers } from "redux";

const rooterReducer = combineReducers({
    user: userReducer
});

export default rooterReducer;

