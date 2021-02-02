import React, { useState, useEffect } from 'react';
import { CardProfile } from './cardProfile/cardProfile.js';
import { CardProducts } from './cardProducts/cardProducts.js';
import { CreditOffers } from './creditOffers/creditOffers.js';
import { Header } from '../header/index.js';
import { useHistory } from "react-router-dom";
import './profile.css';
import { loadProducts, loadBanks } from "../../api/loadApi.js";

export const Profile = () => {
  const [banks, setBanks] = useState([]);
  const [products, setProducts] = useState([]);

  let history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  useEffect(() => {
    loadBanks().then(result => setBanks(result.banks));
    loadProducts().then(result => setProducts(result.myProducts));
  }, []);

  const sumBalanceAccount = (banks) => {
    return banks.reduce((total, bank) => total += bank.accounts[0].balance, 0);
  };

  const sumCreditExpenses = (banks) => {
    let creditArray = [];
    let totalCredit = 0;
    banks.forEach(bank => {
      let extract = bank.accounts[0].accountExtract;
      extract.filter(value => creditArray.push(value.value));
    });
    totalCredit += creditArray.reduce((total, launch) => total += launch, 0);
    return totalCredit;
  };

  const creditOffer = (accBalance, creditCards) => {
    if ((accBalance - creditCards) < 800) {
      return (<CreditOffers onClick={() => handleClick(`/offers`)} />);
    }
    else {
      return (<></>);
    };
  };

  return (
    <>
      <Header />
      <section className='cards-products'>
        {creditOffer(sumBalanceAccount(banks), sumCreditExpenses(banks))}
        <h3>Meus Produtos</h3>
        {products.map((product, index) =>
          <CardProducts
            key={index}
            agency={product.client.agency}
            accountNumber={product.client.accountNumber}
            bankNumber={product.client.bankNumber}
            bankName={product.client.bankName}
            product={product.code}
          />
        )}
      </section>
      <section className='cards-profile'>
        <h3>Minhas Contas</h3>
        {banks.map((bank, index) =>
          <CardProfile
            key={index}
            bankNumber={bank.bankNumber}
            bankName={bank.name}
            agency={bank.accounts[0].agency}
            accountNumber={bank.accounts[0].accountNumber}
            balance={bank.accounts[0].balance}
            creditExpenses={bank.accounts[0].creditExpenses}
            onClick={`/statement/${bank.name}`}
            accountManager={bank.accounts[0].accountManager.email}
            // eslint-disable-next-line
            // creditExpenses={bank.accounts[0].accountExtract
            //   .reduce((total, launch) => total += launch.value, 0)}
          />
        ).reverse()}
      </section>

      <footer className='profile-footer'>
        <p>Saldo das contas: {sumBalanceAccount(banks).toFixed(2)}</p>
        <p>Fatura dos cartões: {sumCreditExpenses(banks).toFixed(2)}</p>
        <p>Total: {(sumBalanceAccount(banks) - sumCreditExpenses(banks)).toFixed(2)}</p>
      </footer>
    </>
  );

};
