import React from 'react';
import './App.css';
import { Switch, Route, HashRouter } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Profile } from "./components/profile/profile";
import { BankStatement } from "./components/bankinformation/BankStatement.js";
import { BankInvoice } from "./components/bankinformation/BankInvoice.js";
import { BankContact } from "./components/bankinformation/BankContact.js";
import { Header } from "./components/header/index.js";
import { Footer } from './components/footer';
import { ClientOffers } from "./components/offers/index.js";

function App() {

  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact={ true } component={ Home } />
        <Route path="/profile" component={ Profile } /> 
        <Route path="/statement" component={ BankStatement } />
        <Route path="/invoice" component={ BankInvoice } />
        <Route path="/contact" component={ BankContact } />
        <Route path="/header" component={ Header } />
        <Route path="/footer" component={ Footer } />
        <Route path="/offers" component={ ClientOffers } />
      </Switch>
    </HashRouter>
  );

};

export default App;
