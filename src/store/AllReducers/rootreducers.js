import { combineReducers } from "redux";
import { productsReducer } from "../reducers/storereducer";

export const rootreducer=combineReducers({
    products:productsReducer
})