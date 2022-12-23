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
      <Box
        sx={{
          position: "relative",
          width: "fit-content",
          height: "100%",
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent:'flex-start',
          alignItems:'center'
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100%",
          }}
          src="https://ir.ebaystatic.com/pictures/aw/pics/jordan-retro-guide/optimized/header/header_desktop_1197x391.png"
        />
        <Typography
          variant="h2"
          sx={{
            fontSize:'84px',
            position: "absolute",
            display: "flex",
            trasnform: "translate(-50%, -50%)",
            fontFamily: 'Old English Five'
          }}
        >
          DirtySoles
        </Typography>
      </Box>
      <Typography variant="h4" sx={{margin: '3rem 2rem', borderBottom:3, borderColor: 'blue', width:'fit-content'}}>All Products</Typography>
      <Box>
        
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center', alignItems: 'center', width:'fit-content'}}>
      {products
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
