import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import classes from "./ModalLogin.module.sass";

const ModalLogin = () => {
  return (
    <form className={classes.form}>
      <Typography variant="h6" component="h2" className={classes.form__title}>
        Authorization
      </Typography>
      <FormControl className={classes.form__input}>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input id="email" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl className={classes.form__input}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your password.
        </FormHelperText>
      </FormControl>
      <Button variant="contained">Login</Button>
    </form>
  );
};

export default ModalLogin;
