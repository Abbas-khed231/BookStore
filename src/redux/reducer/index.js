import addItemsReducer from "./addItemReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    addItemsReducer,
})

export default rootReducers;