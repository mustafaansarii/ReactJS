import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";


const store=configureStore({
    reducer:combineReducers({
        // reducers
    })
})

export default store;