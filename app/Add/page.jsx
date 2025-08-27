"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

// Import MUI components
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const Add = () => {
  const [newTodo, setNewTodo] = useState("");
  const router = useRouter();

  // SEND POST API
  const addTodo = async () => {
    if (!newTodo.trim()) return; // prevent empty input
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title: newTodo }),
    });
    let res = await a.json();
    setNewTodo(""); // clear input
    router.push("/home"); // go back to home after adding
    console.log(res);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5,  height:"100vh"}}>
      <Box sx={{ p: 3, bgcolor: "lavender", borderRadius: 2, height:"90vh"}}>
        <Typography variant="h5"  gutterBottom>
          Add a Todo
        </Typography>

        {/* Material UI TextField instead of input */}
        <TextField
          fullWidth
          label="Write your todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Material UI Button instead of HTML button */}
        <Button variant="contained" color="primary" onClick={addTodo}>
          Add
        </Button>
      </Box>
    </Container>
  );
};

export default Add;
