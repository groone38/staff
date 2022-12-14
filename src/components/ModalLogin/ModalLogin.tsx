import React, { useState } from "react";
import {
  Backdrop,
  Button,
  CircularProgress,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import classes from "./ModalLogin.module.sass";
import { auth } from "./../../store/reducers/Auth/actionCreators";
import { useAppDispatch } from "../../store";
import { useAppSelector } from "./../../store/index";
import { useNavigate } from 'react-router-dom';

const ModalLogin = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const loaded = useAppSelector((state) => state.auth.isLoading);
  const error = useAppSelector(state => state.auth.error)
  const navigate = useNavigate()
  const valueChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue({
      ...value,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = async () => {
    await dispatch(auth(value));
    if(window.localStorage.getItem('user')) {
      navigate("/contacts")
    }
  };

  return (
    <>
      {loaded && (
         <Backdrop
         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
         open={true}
       >
         <CircularProgress color="inherit" />
       </Backdrop>
      )}
      <form className={classes.form}>
        <Typography variant="h6" component="h2" className={classes.form__title}>
          Authorization
        </Typography>
        <FormControl className={classes.form__input}>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            id="email"
            aria-describedby="my-helper-text"
            name="email"
            onChange={valueChange}
          />
        </FormControl>
        <FormControl className={classes.form__input}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            aria-describedby="my-helper-text"
            type="password"
            name="password"
            onChange={valueChange}
          />
        </FormControl>
        <Button variant="contained" onClick={onSubmit}>
          Login
        </Button>
        {error && <span className={classes.error}>{error}</span>}
      </form>
    </>
  );
};

export default ModalLogin;
