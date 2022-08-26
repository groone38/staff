import axios from "axios";
import React, { useEffect } from "react";
import Card from "./Card/Card";
import classes from './CardsContacts.module.sass'

const CardsContacts = () => {

  const fetchCards = async () => {
    const responce = await axios.get('http://localhost:3001/contacts')
    console.log(responce.data)
  }

  useEffect(() => {
    fetchCards()
  }, [])
  
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
