import React from "react";
import classes from "./Header.module.sass";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Takeoff-staff
          </Typography>
          <div>
            <Button color="inherit" variant="text">Create contact</Button>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
