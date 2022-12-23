import React, {useState, useEffect} from "react";
import { Container, Typography, Box } from "@mui/material";
import { ShoeCard } from "../components/ShoeCard";
import axios from "axios";


export const Home = () => {
  const [featured, setFeatured] = useState([]); //array of objects

  const getFeatured = async () => {
    const data = await (await axios.get("http://localhost:10000/featured")).data;
    setFeatured(data.data);
  };

  useEffect(() => {
    getFeatured();
  }, []);
  return (
    <Container sx={{width:'100%', minHeight:'100vh'}}>
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
          src="https://media.gq.com/photos/5a7a30cc8f045079315a6adb/16:9/w_1920,c_limit/flight-club-goat-merger-gq.jpg"
        />
      </Box>
      <Typography variant='h4' sx={{borderBottom:3, borderColor:'blue', width:'fit-content'}}>Featured</Typography>

      <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center', alignItems:'center'}}>
      {featured
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
