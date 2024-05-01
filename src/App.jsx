import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonViewer from './componenets/PersonViewer'
import TodoList from './componenets/TodoList'
import TodoForm from './componenets/TodoForm'

function App() {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([])

  return (
    <>
      <TodoForm todo={todo} setTodo={setTodo} setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos} />
      <hr></hr>
      <PersonViewer />
    </>
  )
}

const App1 = () => <div>app1</div>;
const App2 = () => <div>app2</div>;

export default App
export { App1, App2 }
