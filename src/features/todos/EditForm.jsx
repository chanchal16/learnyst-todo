import React from 'react'

export const EditForm = ({currentTodo,
    onEditInputChange,
    onEditFormSubmit}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
      <input type={'text'} className='input-field' value={currentTodo.todo} onChange={onEditInputChange} />
      <button className='form-btn' onClick={()=>onEditFormSubmit(currentTodo.id,currentTodo.todo,currentTodo.isCompleted)}>
        update</button>
    </form>
  )
}
