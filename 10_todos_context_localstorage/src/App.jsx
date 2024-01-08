import { useEffect, useState } from 'react'
import {TodoProvider} from './contexts/TodoContext'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [ todos, setTodos ] = useState([])

  const addTodo = (todos) => {
    setTodos((prev) => [{id: Date.now(), ...todos}, ...prev])
  }

  const updateTodo = (id, todos) => {
    setTodos((prev) => prev.map((prevTodos) => (prevTodos.id === id ? todos :prevTodos)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todos) => todos.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodos) => prevTodos.id === id ? {...prevTodos, completed: !prevTodos.completed} : prevTodos))
  }

  useEffect(() =>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todos) => (
              <div key={todos.id}
              className='w-full'
              >
              <TodoItem todo={todos}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
