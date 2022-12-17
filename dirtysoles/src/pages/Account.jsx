import { Container, Typography, Button, Box } from "@mui/material";
import React, { useState } from "react";
import { SneakerTable } from "../components/SneakerTable";
import { InventoryTable } from "../components/InventoryTable";

export const Account = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container
      sx={{
        padding: "1rem",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box sx={{ margin: "1rem", width: "30%", gap: "3" }}>
        <Typography variant="h4">Welcome Back!</Typography>
        <Button onClick={() => setToggle(false)}>Inventory Table</Button>
        <Button onClick={() => setToggle(true)}>Sneaker Table</Button>
      </Box>
      <Box
        sx={{
          border: "solid",
          padding: "0",
          width: "100%",
          overflow: "scroll",
        }}
      >
        {!toggle ? <InventoryTable /> : <SneakerTable />}
      </Box>
    </Container>
  );
};
