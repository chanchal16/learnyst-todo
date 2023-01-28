import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TODO } from './todoSlice';

export const TodoForm = () => {
    const[todo,setTodo] = useState('');
    const todosState = useSelector(state=>state.todos);
    const todoDispatch = useDispatch()

    const addTodo = () =>{
        const todoObj = {
            id:new Date().getTime(),
            todo:todo
        }
        todoDispatch(ADD_TODO(todoObj));
        setTodo('')
console.log('todos',todosState)
    }
  return (
    <div>
        <input type={'text'} value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button onClick={addTodo}>add</button>
    </div>
  )
}
