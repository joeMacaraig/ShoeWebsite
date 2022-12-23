import {
  Container,
  Button,
  FormControl,
  TextField,
  Typography,
  Card,
  Box,
} from "@mui/material";
import React, { useState } from "react";
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
    console.log(username, password);
    await login(username, password);
  };
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        margin: 0,
        padding: 0,
        width: "100%",
        minWidth: '100vw',
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Container
        sx={{
          width: 'fit-content',
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormControl
          sx={{
            width: 400,
            height: 250,
            alignContent: "center",
          }}
        >
          <Typography 
          sx={{m:2}}
          variant="h5" 
          component="h3">
            Welcome to DirtySoles 🚀
          </Typography>
          <Typography sx={{m:2}}>Enter Admin details down below</Typography>
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
          <Button onClick={handleSubmit} disabled={loading}>
            Login
          </Button>
          {error && <Error>{error}</Error>}
        </FormControl>
      </Container>
      <Card
        sx={{
          position: "relative",
          width: "fit-content",
          height: "100%",
          margin: 0,
          padding: 0,
          borderRadius: "30px 0px 0px 30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            opacity: 0.6,
          }}
          src="https://i.pinimg.com/564x/84/8b/ee/848bee280d2f625f13569eaa4c0f2a86.jpg"
        />
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            trasnform: "translate(-50%, -50%)",
          }}
        >
          Dirty Soles
        </Typography>
      </Card>
    </Container>
  );
};
