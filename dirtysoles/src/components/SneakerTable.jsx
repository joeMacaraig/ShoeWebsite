import React, { useState, useEffect } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {
  Button,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Table,
  TableBody,
} from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

export const SneakerTable = () => {
  const { user } = useAuthContext();
  const [sneakers, setSneakers] = useState([]); //array of objects

  const getSneakers = async () => {
    const data = await (
      await axios.get("http://localhost:10000/sneakers")
    ).data;
    setSneakers(data.data.sneakers);
  };

  useEffect(() => {
    if (user){
      getSneakers();
    }
  }, [user]);

  const addToInventory = async (id) => {
    const item = await (
      await axios.get(`http://localhost:10000/sneaker/${id}`)
    ).data;
    const inventoryItem = await await axios.get(
      `http://localhost:10000/inventory/${id}`
    );
    if (item !== inventoryItem) {
      const addData = await await axios.post(
        `http://localhost:10000/inventory/add/${id}`
      );
    }
  };

  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography sx={{ fontWeight: "bold" }}>
                Sneaker Database
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography>Name</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography>Price</Typography>
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sneakers
            .sort(function (a, b) {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              } else {
                return 0;
              }
            })
            .map((shoe) => (
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="" scope="shoe">
                  <img
                   height="75px"
                    src={shoe.images.thumbnail}
                    alt=""
                  />
                </TableCell>
                <TableCell align="left">{shoe.name}</TableCell>
                <TableCell align="left">{shoe.price}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => {
                      addToInventory(shoe.id);
                    }}
                    startIcon={<AddBoxIcon />}
                  > Add
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};