import React from 'react';

export const CardProducts = (props) => {

  return (
    <div className='card'>
      <h2 className='bank'>{props.bankNumber} / {props.bankName}</h2>
      <div className='card-account'>
        <p className='agency'>Ag: {props.agency}</p>
        <p>CC: {props.accountNumber}</p>
      </div>
      <p>Produto: {props.product}</p>
    </div>
  );
  
};