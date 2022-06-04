import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions
    .map((t) => t.amount)
    .reduce((item, acc) => (acc += item), 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
