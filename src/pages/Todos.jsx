import React,{useState} from 'react'
import { TodoList } from '../components/TodoList';
import { EditForm } from '../features/todos/EditForm';
import { useDispatch } from 'react-redux'
import { UPDATE_TODO } from '../features/todos/todoSlice';
import { Tabs } from '../components/Tabs';
import TodoForm from '../features/todos/TodoForm'

export const Todos = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const todoDispatch = useDispatch();

  const handleEditInputChange = (e) =>{
    setCurrentTodo({ ...currentTodo, todo: e.target.value });
  }

  const updateTodo = (id,value,status) =>{
    todoDispatch(UPDATE_TODO({id,todo:value,isCompleted:status}))
    setIsEditing(false)  
  }

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }
  return (
    <div>
      <h1>Todo App</h1>
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={updateTodo}
        />
      ) : (
        <TodoForm/>
      )}

      <div>
        <Tabs/>
        <TodoList handleEditClick={handleEditClick}/>
      </div>
    </div>
  )
}
