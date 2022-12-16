import React, {useState, useEffect} from "react";
import { Container, Typography } from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";
import { SneakerCard } from "../components/ShoeCard";
import axios from "axios";

export const Account = () => {
    const {user} = useAuthContext();
    const [sneakers, setSneakers] = useState([]); //array of objects

    const getSneakers = async () => {
      const data = await (await axios.get("http://localhost:10000/sneakers")).data;
      setSneakers(data.data.sneakers);
    };
  
    useEffect(() => {
      getSneakers();
    }, []);
  return (
    <Container>
        <Typography>{user.username}</Typography>
        {sneakers
      .sort(function (a, b) {
        if (a.name < b.name){
            return -1;
        } if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }})
      .map((shoe) => (
            <SneakerCard
            name={shoe.name}
            img={shoe.images.thumbnail}
            id={shoe.id}
            price={shoe.price}
          />
    ))}
    </Container>
  );
};
