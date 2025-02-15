import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import { TextField, Container, Typography } from "@mui/material";

import { Button } from "./components/ui/button";
import { buttonVariants } from "./components/ui/button"
import { Input } from "./components/ui/input";


import MyProfile from "./pages/MyProfile";


function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // TODO: Send message to backend/AI
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        AI Health Companion
      </Typography>
      <div>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <Typography variant="body1">{msg.text}</Typography>
          </div>
        ))}
      </div>
      <TextField
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <Button onClick={handleSend} style={{ marginTop: "10px" }}>
        Send
      </Button>
      
    </Container>
  );
}

export default App;
