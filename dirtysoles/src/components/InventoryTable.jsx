import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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

  const deleteInventory = async (id) => {
    const item = await (
      await axios.get(`http://localhost:10000/inventory/${id}`)
    ).data;
    if (item) {
      const deleteData = await await axios.delete(
        `http://localhost:10000/inventory/delete/${id}`
      );
      window.location.reload();
    }
  };

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
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="" scope="shoe">
                  <img height="75px" src={shoe.images.thumbnail} alt="" />
                </TableCell>
                <TableCell align="left">{shoe.name}</TableCell>
                <TableCell align="left">{shoe.price}</TableCell>
                <TableCell align="right">
                  <Button startIcon={<EditIcon />}> Edit</Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => {
                      deleteInventory(shoe.id);
                    }}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
