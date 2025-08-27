"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  colors,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { lightBlue, pink ,amber,lavender} from "@mui/material/colors";
// import { light } from "@mui/material/styles/createPalette";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Fetch all the todo List
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("/api/add");
      const data = await res.json();
      setTodos(data); // data is array, set directly
    };
    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    let res = await fetch("/api/add", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    setTodos(data.todos);
    console.log("deleted");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5,mb:3,  height:"80vh"}}>
      <Box sx={{ p: 3, bgcolor: "lavender", borderRadius: 2, height:"90vh"}}>

    {/* <Container maxWidth="sm" sx={{ mt: 4}} > */}
      <Typography variant="h4" color="primary" align="center" gutterBottom>
        Todo List
      </Typography>

      <Box
      bgcolor={"pink"}
      //  sx={{bgcolor:"violet[100]"}}
      >

      
      <List >
        {todos.map((todo) => (
          <ListItem
          
            key={todo.id}
            secondaryAction={
              <Box>
                {/* Edit Button with Link */}
                <IconButton
                  component={Link}
                  href={`/Edit/${todo.id}`}
                  edge="end"
                  sx={{ mr: 1 }}
                >
                  <EditIcon />
                </IconButton>

                {/* Delete Button */}
                <IconButton
                  edge="end"
                  color="error"
                  onClick={() => handleDelete(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            }
          >
            <ListItemText primary={todo.title} />
          </ListItem>
        ))}
      </List>
      </Box>
      </Box>
    </Container>
  );
};

export default Todo;
