import { TableRow, TableCell, Button, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VerifiedIcon from "@mui/icons-material/Verified";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import { useEffect, useState } from "react";

export const ShoeTable = ({ name, img, id, prices, feature}) => {
  const [toggle, setToggle] = useState(false);
  const [featured, setFeature] = useState(false);
  const [price, setPrice] = useState("");

  const getFeature = () => {
    setFeature(feature);
  };
  const updateInventory = async (id) => {
    console.log(featured, price)
    const data = await (
      await axios.put(`http://localhost:10000/inventory/update/${id}`, {price, featured})
    ).data;
    window.location.reload();
  };

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
  useEffect(() => {
    getFeature();
  }, []);

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="" scope="shoe">
        <img height="75px" src={img} alt="shoe-image" />
      </TableCell>
      <TableCell align="left">{name}</TableCell>
      {!toggle ? (
        <TableCell align="left">${prices}</TableCell>
      ) : (
        <TableCell align="left">
          <TextField
            placeholder={prices}
            type=""
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </TableCell>
      )}
      <TableCell align="center">
        {!featured ? (
          <Button
            startIcon={<VerifiedIcon />}
            onClick={() => {
              setFeature(!featured);
            }}
            color="error"
          >
            Featured
          </Button>
        ) : (
          <Button
            startIcon={<VerifiedIcon />}
            onClick={() => {
              setFeature(!featured);
            }}
          >
            Featured
          </Button>
        )}
      </TableCell>
      <TableCell align="right">
        {!toggle ? (
          <Button
            startIcon={<EditIcon />}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Edit
          </Button>
        ) : (
          <Button
            startIcon={<CheckIcon />}
            onClick={() => {
              updateInventory(id);
            }}
          >
            Submit
          </Button>
        )}
      </TableCell>
      <TableCell align="right">
        {!toggle ? (
          <Button
            onClick={() => {
              deleteInventory(id);
            }}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        ) : (
          <Button
            onClick={() => {
              setToggle(!toggle);
            }}
            startIcon={<CloseIcon />}
          >
            Cancel
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};
