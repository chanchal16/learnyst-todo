import './App.css'
import { TodoList } from './components/TodoList'
import { TodoForm } from './features/todos/TodoForm'
import { Todos } from './pages/Todos'

function App() {
  return (
    <div className="App">
      {/* <TodoForm/>
      <TodoList/> */}
      <Todos/>
    </div>
  )
}

export default App
