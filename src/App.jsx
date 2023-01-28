import './App.css'
import { TodoList } from './components/TodoList'
import { TodoForm } from './features/todos/TodoForm'

function App() {
  return (
    <div className="App">
      <TodoForm/>
      <TodoList/>
    </div>
  )
}

export default App
