import React, { useState } from "react";
import classes from "./Header.module.sass";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useAppDispatch } from "../../store";
import { Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logout } from "../../store/reducers/Auth/authSlice";
import ModalCreate from "./../../components/ModalCreate/ModalCreate";

const Header = () => {
  const sing = !!window.localStorage.getItem("user");
  const [active, setActive] = useState(true);
  const dispatch = useAppDispatch();
  const onOut = () => {
    dispatch(logout());
    window.localStorage.removeItem("user");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Takeoff-staff
            </Typography>
            {sing && (
              <div>
                <Button
                  color="inherit"
                  variant="text"
                  onClick={() => setActive(true)}
                >
                  Create contact
                </Button>
                <Link to={"/login"} className={classes.link}>
                  <Button color="inherit" onClick={onOut}>
                    Out
                  </Button>
                </Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <ModalCreate active={active} setActive={setActive}/>
    </>
  );
};

export default Header;
