import React, { useState } from "react";
import Card from "./Card/Card";
import classes from "./CardsContacts.module.sass";
import { useAppSelector } from "./../../store/index";
import { Backdrop, CircularProgress } from "@mui/material";
import { Search } from './../../UI/Search/Search';

const CardsContacts = () => {
  const state = useAppSelector((state) => state.contacts.contacts);
  const isLoaded = useAppSelector(state => state.contacts.isLoading)
  const [search, setSearch] = useState('')

  const handlerCharChange = (user: string) => {
    setSearch(user);
  };

  let contactsSearch = state.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Search handlerCharChange={handlerCharChange} />
    {isLoaded && (
         <Backdrop
         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
         open={true}
       >
         <CircularProgress color="inherit" />
       </Backdrop>
      )}
      <div className={classes.cards}>
        {contactsSearch.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
export default CardsContacts;
