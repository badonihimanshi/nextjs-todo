import { NextResponse } from "next/server";

let todos =[]; //todos array

//Fetch the current todo list
export async function GET () {
    return NextResponse.json(todos)
}

export async function POST(request) {
    let data = await request.json()

    const newTodo ={ // Created new todo
        completed: false,
        id: Date.now(), // used as unique ID
        title: data.title,  
    };
    // console.log(newTodo);

    todos.push(newTodo) //save new todo to the task

    return NextResponse.json({success:"yes",todos})
}

export async function PATCH(request){
    const {id,title} = await request.json();
    const index = todos.findIndex(todo=> todo.id === id);
    if (index != -1){
        todos[index].title = title;
    }
    return NextResponse.json({success:"updated", todos});
}

export async function DELETE(request){
    const{id} = await request.json();
    todos = todos.filter(todo => todo.id !== id);
    return NextResponse.json({success:"deleted", todos});
}