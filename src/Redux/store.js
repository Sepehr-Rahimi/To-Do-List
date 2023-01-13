import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import toDoReducer from "./todoSlicer";
import toDoReducer from "./ToDo/reducer";



import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



// todo persistance
const persistConfig = {
    key : 'todo',
    storage
}
const persistedReducer = persistReducer(persistConfig,toDoReducer)
// 


const store = configureStore({
    reducer : {
        todos : persistedReducer
    }
})

export default store
export const persistor = persistStore(store)