import { ADD , REMOVE } from "./constants"

export const addTodo = (input) => ({
    type : ADD , 
    payload : input
}) 
export const removeTodo = (input) => ({
    type : REMOVE , 
    payload : input
}) 