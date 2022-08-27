import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Modal,
  Typography,
  Button
} from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch } from "../../store";
import { createContacts } from "../../store/reducers/Contscts/ActionCreators";
import FormCreate from "../../UI/FormCreate/FormCreate";
import classes from "./ModalCreate.module.sass";
import { fetchUsers } from './../../store/reducers/Contscts/ActionCreators';

type Props = {
  active: boolean;
  setActive: (active: boolean) => void;
};

function ModalCreate({ active, setActive }: Props) {
  const dispatch = useAppDispatch();
  const [data, setdata] = useState({
    email: "",
    name: "",
    number: null,
    company: "",
  });

  const valueChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setdata({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = async () => {
    await dispatch(createContacts(data));
    await dispatch(fetchUsers())
    setActive(false)
  };

  return (
    <Modal
      open={active}
      onClose={() => setActive(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modal}>
        <FormCreate valueChange={valueChange} />
        <Button variant="contained" onClick={onSubmit}>Create</Button>
      </Box>
    </Modal>
  );
}

export default ModalCreate;
