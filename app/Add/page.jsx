"use client"
import { useState, useEffect} from 'react'
import React from 'react'
import Link from 'next/link'
import {setTodos,todos} from '../Todo/page'

const Add = () => {

  //  const [todos, setTodos] = useState([]);
  //   const[newTodo, setNewTodo]= useState("")
  
  //    useEffect(() => {
  //     const fetchTodos = async () => {
  //       const res = await fetch("/api/add");
  //       const data = await res.json();
  //       setTodos(data);
  //       console.log(data);
  //     };
  //     fetchTodos();
  //   }, []);

  const addTodo= async()=>{
    let data={
      name: "himanshi",
      role:"code"
    }
    let a = await fetch("/api/add",{
      method:"POST", headers :{
        "content-type":"application/json",
      },
      body:JSON.stringify({data}),
    })
    let res = await a.json()
    // setTodos([...todos,data])
    // setNewTodo("")
    console.log(res)
  }
  return (
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
      <div className="addTodo my-5">

        <h2 className='text-lg font-bold'>Add a Todo</h2>

        <input 
          type='text'
          // value={newTodo}
          // onChange={(e)=> setNewTodo(e.target.value)}
          className='w-1/2 bg-amber-50' 
        />

        <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'
        onClick={addTodo} 
        >
          <Link href={"/home"}>Add</Link>
        </button>
      </div>
      
    </div>
  )
}

export default Add
