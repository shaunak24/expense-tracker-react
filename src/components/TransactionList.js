import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import Transaction from './Transaction';

export const TransactionList = () => {
  const globalContext = useContext(GlobalContext);
  const { transactions } = globalContext;

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
