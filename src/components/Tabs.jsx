import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_BY_STATE } from '../features/todos/todoSlice';

export const Tabs = () => {
    const todosState = useSelector(state=>state.todos);
    const{status} = todosState
    const todoDispatch = useDispatch()
  return (
    <div className='filters-container'>
        <span className={`chip ${status.includes('All')? 'active-filter':''}`} 
        onClick={()=>todoDispatch(FILTER_BY_STATE('All'))}>
          All Tasks
        </span>
        <span className={`chip ${status.includes('active')? 'active-filter':''}`} 
        onClick={()=>todoDispatch(FILTER_BY_STATE('active'))}>
          Active Tasks
        </span>
        <span className={`chip ${status.includes('completed')? 'active-filter':''}`}
         onClick={()=>todoDispatch(FILTER_BY_STATE('completed'))}>
          Completed Tasks
        </span>
    </div>
  )
}
