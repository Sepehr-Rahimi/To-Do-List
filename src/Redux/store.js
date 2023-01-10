import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlicer";



const store = configureStore({
    reducer : {
        todos : todoReducer
    }
})

export default store