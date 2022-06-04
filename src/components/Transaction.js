import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const onClick = (e) => {
    e.preventDefault();
    deleteTransaction(transaction.id);
  };

  const sign = transaction.amount > 0 ? '+' : '-';
  return (
    <>
      <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
        {transaction.text}{' '}
        <span>
          {sign}
          {Math.abs(transaction.amount)}
        </span>
        <button className="delete-btn" onClick={onClick}>
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
