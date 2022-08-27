import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import classes from "./FormCreate.module.sass";

interface FormCreateProps {
    valueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormCreate = ({valueChange}: FormCreateProps) => {
  return (
    <form className={classes.form}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Create contacts
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
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          aria-describedby="my-helper-text"
          name="name"
          onChange={valueChange}
        />
      </FormControl>
      <FormControl className={classes.form__input}>
        <InputLabel htmlFor="company">Company</InputLabel>
        <Input
          id="company"
          aria-describedby="my-helper-text"
          name="company"
          onChange={valueChange}
        />
      </FormControl>
      <FormControl className={classes.form__input}>
        <InputLabel htmlFor="number">Number</InputLabel>
        <Input
          id="number"
          aria-describedby="my-helper-text"
          name="number"
          onChange={valueChange}
        />
      </FormControl>
    </form>
  );
};

export default FormCreate;
