import React from "react";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import classes from "./Card.module.sass";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useAppDispatch } from "../../../store";
import { deleteContacts } from "../../../store/reducers/Contscts/ActionCreators";
import { fetchUsers } from './../../../store/reducers/Contscts/ActionCreators';

interface ContactProps {
  company: string
  email: string
  name: string
  number: number | null
  id?: null | number
}

const Card = ({company, email, name, number, id}: ContactProps) => {
  const dispatch = useAppDispatch()
  const del = async (id:  number | null | undefined) => {
    await dispatch(deleteContacts(id))
    await dispatch(fetchUsers())
  }
  return (
    <div className={classes.card}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Card user
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {email}
        </Typography>
        <Typography variant="body2">
          number: {number}
          <br />
          company: {company}
        </Typography>
      </CardContent>
      <CardActions className={classes.card__footer}>
        <Button size="small">Edit card</Button>
        <Button size="small" onClick={() => del(id)}><DeleteOutlineOutlinedIcon/></Button>
      </CardActions>
    </div>
  );
};

export default Card;
