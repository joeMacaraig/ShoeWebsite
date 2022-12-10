import {
    Container,
    Button,
    FormControl,
    TextField,
    Typography,
  } from "@mui/material";
  import React, {useState} from "react";
  import { useSignup } from "../hooks/useSignup";
  import styled from "styled-components";

  const Error = styled.div`
  padding: 10px;
  background: #ffcccc;
  border: 2px solid red;
  border-radius: 4px;
  margin: 20px 0;
`;
  
  export const Signup = () => {
    //need handle submit and diffent useStates
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { signup, loading, error } = useSignup("");

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        await signup(first_name, last_name, username, email, password)
    }
    return (
      <Container
        sx={{
          m: 0, 
          p:0, 
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControl
          sx={{
            width: 400,
            height: 400
          }}
          onSubmit={handleSubmit}
        >
          <Typography variant="h5" component="h3" align="center">
            Sign Up
          </Typography>
          <TextField
            sx={{ m: 1 }}
            id="outlined-name"
            variant="outlined"
            label="first name"
            type="text"
            value={first_name}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            sx={{ m: 1 }}
            id="outlined-name"
            variant="outlined"
            label="last name"
            type="text"
            value={last_name}
            onChange={(e) => setLastname(e.target.value)}
          />
          <TextField
            sx={{ m: 1 }}
            id="outlined-name"
            variant="outlined"
            label="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ m: 1 }}
            id="outlined-name"
            variant="outlined"
            label="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            sx={{ m: 1 }}
            id="outlined-name"
            variant="outlined"
            label="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSubmit} disabled={loading}>Sign Up</Button>
          {error && <Error>{error}</Error>}
        </FormControl>
      </Container>
    );
  };
  