import React, { useState, useEffect } from "react";
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
  Container,
} from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import { ShoeTable } from "./ShoeTable";

export const InventoryTable = () => {
  const { user } = useAuthContext();
  const [sneakers, setSneakers] = useState([]); //array of objects

  const getSneakers = async () => {
    const data = await (
      await axios.get("http://localhost:10000/inventory")
    ).data;
    setSneakers(data.data);
  };

  useEffect(() => {
    if (user) {
      getSneakers();
    }
  }, [user]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ position: "sticky", top: "0" }}>
          <TableRow>
            <TableCell>
              <Typography sx={{ fontWeight: "bold" }}>Inventory</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography>Name</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography>Price</Typography>
            </TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="right"></TableCell>
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
              <ShoeTable
                name={shoe.name}
                img={shoe.images.thumbnail}
                id={shoe.id}
                prices={shoe.price}
                feature={shoe.featured}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
