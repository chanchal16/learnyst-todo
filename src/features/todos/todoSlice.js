import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos:[],
    selectedTodo:{},
    isEditMode:false
}

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        ADD_TODO:(state,action)=>{
            // state.todos.push(action.payload);
            // return state;
            state.todos = [...state.todos, action.payload]
        },
        DELETE_TODO:(state,action)=>{
            // state.todos = action.payload
            state.todos = state.todos.filter(todo=>todo.id !== action.payload)
        },
        UPDATE_TODO:(state,action)=>{        
            state.todos =  state.todos.map(todo=>todo.id === action.payload.id ? action.payload : todo)
        },
    },
})
export const{ADD_TODO,DELETE_TODO,UPDATE_TODO} = todoSlice.actions
export default todoSlice.reducer