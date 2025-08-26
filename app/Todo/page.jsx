"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import React from 'react'
import Home from '../home/page'

const Todo = () => {
  const [todos, setTodos] = useState([]);
  // const[newTodo, setNewTodo]= useState("")

  //  useEffect(() => {
  //   const fetchTodos = async () => {
  //     const res = await fetch("/api/add");
  //     const data = await res.json();
  //     setTodos(data);
  //     console.log(data);
  //   };
  //   fetchTodos();
  // }, []);


  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);
      console.log(data);
    };
    getTodos();
  }, []);

  return (
    <div>
      <div className="todos">
        <div className="todo flex m-2">
          <ul>
          

            {todos.slice(0, 5).map((todo) => (
              <li className="flex justify-between items-center p-2"
              key={todo.id}>{todo.title}

                <div className="buttons flex">
                  <button className='bg-violet-800 hover:bg-violet-950 p-1 py-1 text-sm font-bold text-white rounded-md mx-1'>
                    <Link href={"/Edit"}>
                      Edit
                    </Link>
                  </button>

                  <button className='bg-violet-800 hover:bg-violet-950 p-1 py-1 text-sm font-bold text-white rounded-md mx-1'>
                    Delete
                  </button>

                </div>
              </li>

            ))}

          </ul>
        </div>
      </div>
      {/*  */}
    </div>
  )
}

export default Todo
