import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsContacts from "./components/CardContacts/CardsContacts";
import ModalLogin from "./components/ModalLogin/ModalLogin";
import Header from "./UI/Header/Header";
import classes from "./App.module.sass";

function App() {
  return (
    <div>
      <Header />
      <div className={classes.wrapper}>
        <Routes>
          <Route path="/" element={<ModalLogin />} />
          <Route path="/contacts" element={<CardsContacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
