import React from "react";
import Card from "./Card/Card";
import classes from './CardsContacts.module.sass'

const CardsContacts = () => {
  return (
    <div className={classes.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardsContacts;
