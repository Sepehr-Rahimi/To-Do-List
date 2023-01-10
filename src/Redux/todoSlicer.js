
import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name : 'todos' ,
    initialState : {
        list : [] ,
    },
    reducers : {
        addTodo : (state,action) => {
            state.list = [...state.list,action.payload]
        } ,
        removeTodo : (state,action) => {
            state.list = state.list.filter(({id}) => id !== action.payload)
        }
    }
})


export default todoSlice.reducer
export const {increment,decrement,setTo,addTodo,removeTodo} = todoSlice.actions