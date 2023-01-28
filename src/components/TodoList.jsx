import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_TODO } from '../features/todos/todoSlice';

export const TodoList = () => {
    const todosState = useSelector(state=>state.todos);
    const{todos} = todosState;
    const todoDispatch = useDispatch()

    const deleteTodo = (id) =>{
        todoDispatch(DELETE_TODO(id))
    }
  return (
    <div>
       {
            todos.map(todo=>(
                <div key={todo.id}>
                    <h3>{todo.todo}</h3>
                    <button onClick={()=>deleteTodo(todo.id)}>del</button>
                </div>
            ))
       } 
    </div>
  )
}
