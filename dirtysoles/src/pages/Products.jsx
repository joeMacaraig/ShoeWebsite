import { Container, Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ShoeCard } from "../components/ShoeCard";

export const Products = () => {
  const [products, setProducts] = useState([]); //array of objects

  const getProducts = async () => {
    const data = await (await axios.get("http://localhost:10000/products")).data;
    setProducts(data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container sx={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}disableGutters>
      <Typography variant="h1">Products</Typography>
      <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center', alignItems: 'center', width:'fit-content'}}>
      {products
      .sort(function (a, b) {
        if (a.name < b.name){
            return -1;
        } if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }})
      .map((shoe) => (
            <ShoeCard
            name={shoe.name}
            img={shoe.images.thumbnail}
            id={shoe.id}
            price={shoe.price}
          />
    ))}
      </Box>
    </Container>
  );
};
