import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  Select,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import styled from "styled-components";

const ShoeDetails = styled.div`
  width: 45%;
  height: 100%;
`;

const ShoeImage = styled.div`
  width: 50%;
  height: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProductDetails = ({ product }) => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState([]);

  const getProductDetails = async () => {
    const data = await (
      await axios.get(`http://localhost:10000/products/${params?.sneakerId}`)
    ).data;
    setProductDetails(data.data);
  };
  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ padding: 3 }}>
          <Typography variant="h3">{productDetails.name}</Typography>
          <Typography variant="h4">${productDetails.price}</Typography>
          <Typography sx={{ textTransform: "uppercase" }}>
            shown: {productDetails.colorway}
          </Typography>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel>Size</InputLabel>
            <Select label="Size">
            {productDetails.shoeSize?.map(function (shoe, idx) {
                return <MenuItem value={idx}>{shoe.size}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button
            sx={{
              width: "50%",
              height: "100px",
              border: "none",
              backgroundColor: "black",
              color: "white",
            }}
          >
            ADD TO BAG
          </Button>
          <Button
            component="button"
            sx={{
              width: "50%",
              height: "100px",
              border: "none",
              color: "black"
            }}
          >
            CHECK OUT
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "50%" }}>
        <img src={productDetails.images?.regular} width="100%" alt="shoe" />
      </Box>
    </Container>
  );
};
