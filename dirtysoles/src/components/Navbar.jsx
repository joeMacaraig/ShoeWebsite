import React from "react";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { Container } from "@mui/system";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

export const Navbar = () => {
  const {user} = useAuthContext();
  const {logout} = useLogout();
  const handleClick = () => {
    logout();
  }
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
          <Button sx={{ textDecoration: "none" }} to="/products" as={NavLink}>Products</Button>
          {!user && (
          <Button sx={{ textDecoration: "none" }} to="/login" as={NavLink}>Login</Button>
          )}
          {user && (
          <Button sx={{ textDecoration: "none" }} to="/login" as={NavLink} onClick={handleClick}>Logout</Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
