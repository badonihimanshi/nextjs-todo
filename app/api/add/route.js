import { NextResponse } from "next/server";

// let todos =[];

// export async function GET () {
//     return NextResponse.json(todos)
// }

export async function POST(request) {
    let data = await request.json()

    // const newTodo ={
    //     completed: false,
    //     id: Date.now(),
    //     title: data.title,  
    // }

    // todos.push(newTodo)

    return NextResponse.json({success:"yes",data})
}