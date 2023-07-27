
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { Spinner } from "react-bootstrap";
import AppRouter from './components/AppRouter';
import "./styles/main.css"
import "./styles/reset.css"
import AppHeader from './components/AppHeader.js';
import AppFooter from './components/AppFooter.js';

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      {/* <NavBar /> */}
      <AppRouter />
      <AppFooter/>
    </BrowserRouter>
  );
}

export default App;
