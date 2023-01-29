export const filterTodos = (todos,status) =>{
    let filteredTodos = [...todos];
    if(status === 'active'){
        return filteredTodos.filter(todo=> todo.isCompleted === false)
    }
    if(status === 'completed'){
        return filteredTodos.filter(todo=>todo.isCompleted === true && todo )
    }
    return filteredTodos
}