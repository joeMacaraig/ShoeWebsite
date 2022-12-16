import React from "react";
import { Container} from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {Products} from "./pages/Products"
import { ProductDetails } from "./pages/ProductDetail";
import { Account } from "./pages/Account";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/products" element={<Products/>}></Route>
            <Route exact path="/products/:sneakerId" element={<ProductDetails />}></Route>
            <Route exact path="/account" element={<Account/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
        </Routes>
      </Container>
    </>
  );
};
