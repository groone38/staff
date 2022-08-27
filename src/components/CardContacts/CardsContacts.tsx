import React from "react";
import Card from "./Card/Card";
import classes from "./CardsContacts.module.sass";
import { useAppSelector } from "./../../store/index";
import { Backdrop, CircularProgress } from "@mui/material";

const CardsContacts = () => {
  const state = useAppSelector((state) => state.contacts.contacts);
  const isLoaded = useAppSelector(state => state.contacts.isLoading)
  console.log(state);
  return (
    <>
    {isLoaded && (
         <Backdrop
         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
         open={true}
       >
         <CircularProgress color="inherit" />
       </Backdrop>
      )}
      <div className={classes.cards}>
        {state.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
export default CardsContacts;
