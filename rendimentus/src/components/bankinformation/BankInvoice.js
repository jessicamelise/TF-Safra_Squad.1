import React, { useState, useEffect } from 'react';
import './bankinformation.css';
import { useLocation, useHistory } from "react-router-dom";
import { Header } from "../header/index.js";
import { loadBanks } from "../../api/loadApi.js";
import { Footer } from '../footer';
import { Images } from '../images/images.js';
import { Card } from '../../assests/card-blue.svg';

export const BankInvoice = () => {
  const [invoice, setInvoice] = useState([]);
  let location = useLocation();
  let history = useHistory();

  useEffect(() => {
    loadBanks().then((client) => {
      setInvoice(client.banks.find(item=>item.name === location.pathname.split("/")[2]).accounts[0].accountExtract);
    });
  }, [location.pathname]);

  const sumExtract = () => {
    let creditArray = [];
    let totalCredit = 0;
    invoice.forEach(value => {
      creditArray.push(value.value);
    });
    totalCredit += creditArray.reduce((total, launch) => total += launch, 0);
    return totalCredit;
  };

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <>
      <Header />
      <h1 className="h-extract">Fatura</h1>
      <section className="section">
        <div className="div-extract text-center">
          <Images className="icon-card" src={Card} />
          <p className="p-size">R$ {sumExtract().toFixed(2)}</p>
        </div>
        <div className="div-extract p-margin see-statement">
          <p onClick={() => handleClick(`/statement/${location.pathname.split("/")[2]}`)}>Ver Extrato Completo</p>
        </div>
      </section>
      <Footer />
    </>
  );

};