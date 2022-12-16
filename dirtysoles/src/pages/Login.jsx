import {
  Container,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React , {useState} from "react";
import { useLogin } from "../hooks/useLogin";
import styled from "styled-components";

const Error = styled.div`
padding: 10px;
background: #ffcccc;
border: 2px solid red;
border-radius: 4px;
margin: 20px 0;
`;

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin("");

  const handleSubmit = async (event) => {
      event.preventDefault(); 
      console.log(username, password)
      await login(username, password)
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
          height: 250
        }}
      >
        <Typography variant="h5" component="h3" align="center">
          Login
        </Typography>
        <TextField
          sx={{ m: 1 }}
          id="outlined-name"
          variant="outlined"
          label="username"
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
          <Button onClick={handleSubmit} disabled={loading}>Login</Button>
          {error && <Error>{error}</Error>}
      </FormControl>
    </Container>
  );
};
