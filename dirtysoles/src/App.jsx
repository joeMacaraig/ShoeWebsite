import React from "react";
import { Container} from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
        </Routes>
      </Container>
    </>
  );
};
