import React, { useReducer } from 'react';
import GlobalContext from './GlobalContext';
import GlobalReducer from './GlobalReducer';

const GlobalState = (props) => {
  // State
  const initialState = {
    transactions: [
      //   { id: 1, text: 'Flower', amount: -20 },
      //   { id: 2, text: 'Salary', amount: 300 },
      //   { id: 3, text: 'Book', amount: -10 },
      //   { id: 4, text: 'Camera', amount: 150 },
    ],
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  // Actions
  const addTransaction = (newTransaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
