import {combineReducers, createStore} from "@reduxjs/toolkit";
import {noteReducer} from "./reducers/noteReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    notes: noteReducer
})

export const store = createStore(rootReducer, composeWithDevTools());