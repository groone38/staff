import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CardsContacts from "./components/CardContacts/CardsContacts";
import ModalLogin from "./components/ModalLogin/ModalLogin";
import Header from "./UI/Header/Header";
import classes from "./App.module.sass";
import { useAppSelector } from "./store";

function App() {
  const navigate = useNavigate()
  
  const token = !!window.localStorage.getItem('user')
  useEffect(() => {
    console.log('work')
    if(token) {
      navigate('/contacts')
    } else {
      navigate('/')
    }
  }, [token])
  return (
    <div>
      <Header />
      <div className={classes.wrapper}>
        <Routes>
          <Route path="/" element={<ModalLogin />}/>
          {token && <Route path="/contacts" element={<CardsContacts />}/>}
        </Routes>
      </div>
    </div>
  );
}

export default App;
