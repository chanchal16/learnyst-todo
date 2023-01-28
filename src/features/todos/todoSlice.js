import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        ADD_TODO:(state,action)=>{
            state.todos = [...state.todos, action.payload]
        },
        DELETE_TODO:(state,action)=>{
            state.todos = state.todos.filter(todo=>todo.id !== action.payload)
        },
        
    },
})
export const{ADD_TODO,DELETE_TODO} = todoSlice.actions
export default todoSlice.reducer