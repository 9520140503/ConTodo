import React, { useEffect, useState } from 'react'
import { TodoProvider } from './Context'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'


function App() {
  const [todos,setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(), ...todo},...prev])
  }
  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    }

  const deleteTodo = (id) => {
    setTodos((prevTodo) => (prevTodo.filter((todo) => todo.id !== id)))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className='text-3xl text-blue-300 text-center p-5'>Todo App</div>
      <div className='bg-[#172842] min-h-screen py-8 w-full max-w-2xl mx-auto shadow-md my-10 text-white'>
        <div  className='mb-4'>
          <TodoForm/>
        </div>

        <div className="">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}>
                <TodoItem todo={todo}/>
              </div>
            ))}
        </div>
        
      </div>
    </TodoProvider> 
  )
}

export default App