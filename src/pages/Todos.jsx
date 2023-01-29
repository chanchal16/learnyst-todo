import React,{useState} from 'react'
import { TodoList } from '../components/TodoList';
import { EditForm } from '../features/todos/EditForm';
import { TodoForm } from '../features/todos/TodoForm';
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_TODO } from '../features/todos/todoSlice';

export const Todos = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const todoDispatch = useDispatch();

  const handleEditInputChange = (e) =>{
    setCurrentTodo({ ...currentTodo, todo: e.target.value });
    console.log(currentTodo);
  }

  const updateTodo = (id,value) =>{
    todoDispatch(UPDATE_TODO({id,todo:value}))
    setIsEditing(false)  
  }

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }
  return (
    <div>
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={updateTodo}
        />
      ) : (
        <TodoForm />
      )}

      <div>
        <TodoList handleEditClick={handleEditClick}/>
      </div>
    </div>
  )
}
