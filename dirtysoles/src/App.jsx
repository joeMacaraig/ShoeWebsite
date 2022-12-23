import React from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import {Products} from "./pages/Products"
import { ProductDetails } from "./pages/ProductDetail";
import { Account } from "./pages/Account";
import { Login } from "./pages/Login";
import { useAuthContext } from "./hooks/useAuthContext";

export const App = () => {
  const {user} = useAuthContext(); 
  return (
    <>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/products" element={<Products/>}></Route>
            <Route exact path="/products/:sneakerId" element={<ProductDetails />}></Route>
            <Route path="/account" element={user ? <Account/> : <Navigate to="/login"/>}></Route>
            <Route path="/login" element={!user ? <Login/> : <Navigate to="/account"/>}></Route>
        </Routes>
    </>
  );
};
