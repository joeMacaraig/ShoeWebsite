import { Button, FormControl, TextField, Typography } from "@mui/material";
import { memo, useState } from "react";


export const ProductForm = memo(({name, id, price, featured}) => {
    const [newPrice, setPrice] = useState("");
    const [feature, setFeature] = useState(false);
    const [newName, setName] = useState("");
    return (
        <FormControl sx={{width: 400, height: 250, alignContent:'center', position:'absolute', backgroundColor: 'white'}}>
            <Typography>Edit Form</Typography>
            <TextField
            sx={{ m: 1 }}
            id="outlined-name"
            variant="outlined"
            placeholder={name}
            type="text"
            value={newName}
            onChange={(e) => setName(e.target.value)}
          />
            <TextField
            sx={{display: 'flex', justifyContent:'center', alignItems:'center'}}
            id="outlined-name"
            variant="outlined"
            placeholder={price}
            type="text"
            value={newPrice}
            onChange={(e) => setPrice(e.target.value)}
          />
            <TextField
            sx={{ m: 1 }}
            id="outlined-name"
            variant="outlined"
            placeholder={featured}
            type="checklist"
            value={feature}
            onChange={(e) => setFeature(e.target.value)}
          />
          <Button>Edit</Button>
        </FormControl>
    )
});