import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";

export const ProductDetails = () => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [shipping, setShipping] = useState(true);
  const [term, setTerm] = useState(true);

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
          backgroundColor: "#FBFBFB",
          marginTop: '5px',
        }}
      >
        <Box sx={{ marginBottom: 2, padding: 3 }}>
          <Typography
            sx={{ marginBottom: 2, fontFamily: "Poppins Black, sans-serif" }}
            variant="h3"
          >
            {productDetails.name}
          </Typography>
          <Typography sx={{ marginBottom: 2 }} variant="h4">
            ${productDetails.price}
          </Typography>
          <Typography sx={{ marginBottom: 2, textTransform: "uppercase" }}>
            shown: {productDetails.colorway}
          </Typography>
          <FormControl
            variant="standard"
            sx={{ marginBottom: 2, width: "100%" }}
          >
            <InputLabel sx={{ color: "black" }}>SIZE</InputLabel>
            <Select sx={{ width: "100%" }}>
              {productDetails.shoeSize?.map(function (shoe, idx) {
                return <MenuItem value={idx}>{shoe.size}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <Button
            sx={{
              marginBottom: 2,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottom: "solid",
              borderRadius: 0,
              borderColor: "black",
              color: "black",
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 1,
              paddingBottom: 1,
            }}
            onClick={() => setShipping(!shipping)}
          >
            <Typography>SHIPPING AND RETURNS</Typography>
            {!shipping ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </Button>
          {!shipping && <Box sx={{ width: "100%", padding: 2, margin: 2 }}>
            <Typography>Shipping and Returns</Typography>
          </Box>}
          <Button
            sx={{
              marginBottom: 2,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottom: "solid",
              borderRadius: 0,
              borderColor: "black",
              color: "black",
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 1,
              paddingBottom: 1,
            }}
            onClick={() => setTerm(!term)}
          >
            <Typography>TERMS</Typography>
            {!term ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </Button>
          {!term && <Box sx={{ width: "100%", padding: 2, margin: 2 }}>
            <Typography>Terms</Typography>
          </Box>}
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button
            sx={{
              width: "50%",
              height: "100px",
              border: "none",
              borderRadius: 0,
              backgroundColor: "black",
              color: "white",
              overflow: 'hidden',
            }}
          >
            ADD TO BAG
          </Button>
          <Button
            component="button"
            sx={{
              width: "50%",
              height: "100px",
              border: "solid",
              borderRadius: 0,
              backgroundColor: "white",
              color: "black",
            }}
          >
            CHECK OUT
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "50%", backgroundColor: "white"}}>
        <Box sx={{width: '90%', height: '10%',display: 'flex', flexDirection:'row', textDecoration: 'none', padding:2}}>
          <Link to="/" style={{textDecoration: 'none', color: 'black', marginRight:'6px'}}><Typography variant="h5">Home</Typography></Link>
          <Link to="/products" style={{textDecoration: 'none', color: 'black', marginRight:'6px'}}><Typography variant="h5">/ Products </Typography></Link>
          <span><Typography variant="h5">/ {productDetails.name}</Typography></span>
        </Box>
        <img src={productDetails.images?.regular} width="100%" alt="shoe" />
      </Box>
    </Container>
  );
};
