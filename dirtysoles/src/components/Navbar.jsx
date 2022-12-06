import React from "react";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import { Container } from "@mui/system";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar sx={{ bgcolor: "white", m: 0 }} position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography sx={{ color: "black", flexGrow: 1 }} variant="h6">
            <Link
              sx={{ color: "black", textDecoration: "none" }}
              to="/"
              as={NavLink}
            >
              DirtySoles
            </Link>
          </Typography>
          <Button sx={{ textDecoration: "none" }}>Products</Button>
          <Button sx={{ textDecoration: "none" }} to="/login" as={NavLink}>
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
