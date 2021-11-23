import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expenses";

const initialState = {};
const reducers = combineReducers({ expenses: expenseReducer });

const store = createStore(reducers, initialState);
export default store;
