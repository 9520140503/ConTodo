import React, { useState } from 'react'
import { useTodo } from '../Context';

function TodoForm() {
    const [todo,setTodo] = useState("");
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();
        if(!todo) return 

        addTodo({todo,completed:false})

        setTodo("")
    }
  return (
    <div>
       <form onSubmit={add} className='flex justify-center items-center max-w-xl mx-auto p-5 bg- gap-x-4' >
         <input 
        type="text" 
        className='p-2 w-full text-black shadow-md shadow-yellow-300 rounded-lg outline-none bg-gray-400'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}/>

        <button type='submit' className='bg-green-500 p-2 rounded-lg'>Add</button>
       </form>
    </div>
  )
}

export default TodoForm