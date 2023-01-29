import React from 'react'

export const EditForm = ({currentTodo,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit}) => {
  return (
    <div>
        <input type={'text'} value={currentTodo.todo} onChange={onEditInputChange} />
        <button onClick={()=>onEditFormSubmit(currentTodo.id,currentTodo.todo)}>update</button>
    </div>
  )
}
