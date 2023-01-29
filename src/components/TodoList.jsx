import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FiEdit,FiTrash} from 'react-icons/fi';
import {IoCheckmarkDoneCircleSharp,IoCheckmarkDoneCircleOutline} from 'react-icons/io5';
import { DELETE_TODO, TODO_COMPLETED} from '../features/todos/todoSlice';
import { filterTodos } from '../utils/filter-todos';

export const TodoList = ({handleEditClick}) => {
  const todosState = useSelector(state=>state.todos);
  const{todos,status} = todosState;
  const todoDispatch = useDispatch();

  const deleteTodo = (id) =>{
    todoDispatch(DELETE_TODO(id))
  }

  // filtered todos
  const sortedTodos = filterTodos(todos,status)
   
  return (
    <div className='todos-container'>
      {sortedTodos.length > 0 ? (
        <>
        {
            sortedTodos?.map(todo=>(
                <div key={todo.id} className='todo-item'>                
                  <h3>{todo.todo}</h3>
                  <div className='btns-div'>
                    <button className='btns' onClick={()=>deleteTodo((todo.id))}><FiTrash size={'1.2rem'} /> </button>
                    <button className='btns' onClick={()=>handleEditClick(todo)}><FiEdit size={'1.2rem'}/> </button> 
                    {todo.isCompleted !== true ? 
                      (
                        <button className='btns' onClick={()=>todoDispatch(TODO_COMPLETED(todo))}><IoCheckmarkDoneCircleOutline size={'1.4rem'} /></button>
                        ):(<button className='btns done-btn'><IoCheckmarkDoneCircleSharp color='#34d399' size={'1.5rem'} /></button>
                      )}
                  </div>
                </div>
            ))
        } 
        </>)
       : (
        <h1 className='no-tasks'>No Tasks...</h1>
       )}
    </div>
  )
}
