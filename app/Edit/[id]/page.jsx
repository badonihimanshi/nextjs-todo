"use client"
import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation';
import React from 'react';

import { Container, Typography, Box, TextField,Button} from '@mui/material';

const Edit = () => {
    const router = useRouter();
    const params = useParams();
    const todoId = Number(params.id);

    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);


    //Fetch all the todo List
    useEffect(() => {
        const fetchTodos = async () => {
            const res = await fetch("/api/add");
            const data = await res.json();
            const todo = data.find(t => t.id === todoId);
            if (todo) setTitle(todo.title);
            setLoading(false);
        };
        fetchTodos();
    }, [todoId]);

    //Send PATCH api
    const handleEdit = async () => {
        if (!title.trim()) return; //Prevents empty array from adding to the list
        let a = await fetch("/api/add", {
            method: "PATCH", headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: todoId, title }),//send only title
        })
        if (!a.ok) {
            console.error("Failed to update todo");
            return;
        }
        let res = await a.json()
        router.push('/home'); // Redirect after add
    }


    if (loading) return <div>Loading.....</div>
    return (
        <Container maxWidth="md" sx={{ mt: 5, height: "100vh" }}>
            <Box sx={{ p: 3, bgcolor: "lavender", borderRadius: 2, height: "90vh" }}>
                <Typography variant='h5' gutterBottom>
                    Edit Todo
                </Typography>



                <TextField
                    fullWidth
                    label="Edit the task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ mb: 2 }}
                ></TextField>

                <Button variant="contained" color="primary" onClick={handleEdit}>
                    Edit
                </Button>
            </Box>
        </Container>


        // <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        //     <div className="addTodo my-5">

        //         <h2 className='text-lg font-bold'>Edit Task</h2>

        //         <input
        //             type='text'
        //             value={title}
        //             
        //             className='w-1/2 bg-amber-50'
        //         />

        //         <button
        //             onClick={handleEdit}
        //             className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'
        //         >Edit
        //         </button>
        //     </div>
        // </div>

    )
}

export default Edit
