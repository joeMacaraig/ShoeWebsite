import React from "react";
import { Container} from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {Products} from "./pages/Products"
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

export const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/products" element={<Products/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
        </Routes>
      </Container>
    </>
  );
};
