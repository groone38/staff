import React from "react";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import classes from "./Card.module.sass";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Card = () => {
  return (
    <div className={classes.card}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Card user
        </Typography>
        <Typography variant="h5" component="div">
          Name
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          employee
        </Typography>
        <Typography variant="body2">
          number: 1231231123
          <br />
          company: SDFF
        </Typography>
      </CardContent>
      <CardActions className={classes.card__footer}>
        <Button size="small">Edit card</Button>
        <Button size="small"><DeleteOutlineOutlinedIcon/></Button>
      </CardActions>
    </div>
  );
};

export default Card;
