import { Box, Modal, Button } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch } from "../../store";
import { createContacts, editContact } from "../../store/reducers/Contscts/ActionCreators";
import FormCreate from "../../UI/FormCreate/FormCreate";
import classes from "./ModalCreate.module.sass";
import { fetchUsers } from "./../../store/reducers/Contscts/ActionCreators";

type Props = {
  active: boolean;
  setActive: (active: boolean) => void;
  company?: string
  email?: string
  name?: string
  number?: number | null
  id?: null | number
  btn?: string
};

function ModalCreate({ active, setActive, company, email, name, number, id, btn='Create' }: Props) {
  const dispatch = useAppDispatch();
  const [data, setdata] = useState({
    email: email ? email : "",
    name: name ? name :"",
    number: number ? number : null,
    company: company ? company :"",
  });

  const valueChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setdata({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = async () => {
    if(id) {
      const newData = {
        ...data,
        id: id
      }
      await dispatch(editContact(newData))
    } else {
      await dispatch(createContacts(data));
    }
    await dispatch(fetchUsers());
    setActive(false);
  };

  return (
    <Modal
      open={active}
      onClose={() => setActive(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modal}>
        <FormCreate valueChange={valueChange} {...data} btn={btn}/>
        <Button variant="contained" onClick={onSubmit}>
          {btn}
        </Button>
      </Box>
    </Modal>
  );
}

export default ModalCreate;
