import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos:[],
    status:'All',
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
        UPDATE_TODO:(state,action)=>{        
            state.todos =  state.todos.map(todo=>todo.id === action.payload.id ? action.payload : todo)
        },
        TODO_COMPLETED:(state,action)=>{
            state.todos = state.todos.map(todo=>todo.id === action.payload.id ? {...todo,isCompleted:true} : todo)
        },
        FILTER_BY_STATE:(state,action)=>{
            state.status = action.payload
        }
    },
})
export const{ADD_TODO,DELETE_TODO,UPDATE_TODO,TODO_COMPLETED,FILTER_BY_STATE} = todoSlice.actions
export default todoSlice.reducer